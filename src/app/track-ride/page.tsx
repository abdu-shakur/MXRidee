'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, Star } from "lucide-react"
import Image from "next/image"

export default function RideTrackingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-teal-600">Track Your Ride</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Live Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-96 w-full overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=384&width=768" alt="Live Tracking Map" layout="fill" objectFit="cover" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ride Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=64&width=64" alt="Driver" layout="fill" objectFit="cover" />
              </div>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-current text-yellow-500" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">Vehicle:</p>
              <p>Toyota Camry (ABC 123 XY)</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <p className="text-green-600">Driver is on the way</p>
            </div>
            <div>
              <p className="font-semibold">ETA:</p>
              <p>5 minutes</p>
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1">
                <Phone className="mr-2 h-4 w-4" />
                Call Driver
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageCircle className="mr-2 h-4 w-4" />
                Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}