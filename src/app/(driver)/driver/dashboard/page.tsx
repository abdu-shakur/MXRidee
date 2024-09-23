'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Car, DollarSign, MapPin, Star, Users } from "lucide-react"
import Image from "next/image"

export default function DriverDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-teal-600">Driver Dashboard</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Rides</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.9</div>
            <p className="text-xs text-muted-foreground">+0.1 since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Hours</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">246h</div>
            <p className="text-xs text-muted-foreground">+23h from last month</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="overview" className="mt-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="rides">Rides</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Passenger</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead>Earnings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>John D.</TableCell>
                    <TableCell>Central Market</TableCell>
                    <TableCell>Airport</TableCell>
                    <TableCell>₦2,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-14</TableCell>
                    <TableCell>Sarah M.</TableCell>
                    <TableCell>University</TableCell>
                    <TableCell>Shopping Mall</TableCell>
                    <TableCell>₦1,800</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-14</TableCell>
                    <TableCell>Michael R.</TableCell>
                    <TableCell>Hotel Grand</TableCell>
                    <TableCell>City Park</TableCell>
                    <TableCell>₦1,200</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="earnings">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                {/* Replace with an actual chart component */}
                <div className="flex h-full items-center justify-center bg-muted">
                  Earnings Chart Placeholder
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rides">
          <Card>
            <CardHeader>
              <CardTitle>Ride History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Passenger</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Earnings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>John D.</TableCell>
                    <TableCell>15.2 km</TableCell>
                    <TableCell>32 min</TableCell>
                    <TableCell>₦2,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-14</TableCell>
                    <TableCell>Sarah M.</TableCell>
                    <TableCell>8.7 km</TableCell>
                    <TableCell>20 min</TableCell>
                    <TableCell>₦1,800</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-14</TableCell>
                    <TableCell>Michael R.</TableCell>
                    <TableCell>5.5 km</TableCell>
                    <TableCell>15 min</TableCell>
                    <TableCell>₦1,200</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Current Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=300&width=800" alt="Map" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-teal-600 p-2">
                <Car className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-teal-600" />
              <span>Current Location: Central Market, Minna</span>
            </div>
            <Button variant="outline">
              Go Online
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}