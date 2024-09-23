'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, History, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UserProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-teal-600">My Profile</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=128&width=128" alt="Profile Picture" layout="fill" objectFit="cover" />
              </div>
              <Button variant="outline" className="mt-2">
                Change Picture
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <Tabs defaultValue="personal">
              <TabsList className="mb-4">
                <TabsTrigger value="personal">
                  <User className="mr-2 h-4 w-4" />
                  Personal Details
                </TabsTrigger>
                <Link href="payment-methods">
                <TabsTrigger value="payment">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </TabsTrigger>
                </Link>
                <TabsTrigger value="preferences">
                  <History className="mr-2 h-4 w-4" />
                  Ride Preferences
                </TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">Save Changes</Button>
                </form>
              </TabsContent>
              <TabsContent value="payment">
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add New Payment Method
                  </Button>
                  <Card>
                    <CardHeader>
                      <CardTitle>Saved Payment Methods</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">You have no saved payment methods.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="preferences">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="defaultRideType">Default Ride Type</Label>
                    <select
                      id="defaultRideType"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    >
                      <option>Standard</option>
                      <option>Premium</option>
                      <option>Ride Sharing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="homeAddress">Home Address</Label>
                    <Input id="homeAddress" placeholder="Enter your home address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workAddress">Work Address</Label>
                    <Input id="workAddress" placeholder="Enter your work address" />
                  </div>
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">Save Preferences</Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}