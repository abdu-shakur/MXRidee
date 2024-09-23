'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Car, Users } from "lucide-react"
import Image from "next/image"

export default function RideRequestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-teal-600">Request a Ride</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Enter Ride Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-teal-600" />
                  <Input id="pickup" placeholder="Enter pickup location" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dropoff">Drop-off Location</Label>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-coral-500" />
                  <Input id="dropoff" placeholder="Enter drop-off location" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Ride Type</Label>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4">
                    <Car className="mb-2 h-6 w-6" />
                    Standard
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4">
                    <Car className="mb-2 h-6 w-6" />
                    Premium
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center p-4">
                    <Users className="mb-2 h-6 w-6" />
                    Ride Sharing
                  </Button>
                </div>
              </div>
              <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">Request Ride</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Route Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=256&width=512" alt="Route Map" layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Estimated Fare:</span>
                <span>₦1,500 - ₦2,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Estimated Time:</span>
                <span>15-20 minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Distance:</span>
                <span>7.5 km</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    
  )
}