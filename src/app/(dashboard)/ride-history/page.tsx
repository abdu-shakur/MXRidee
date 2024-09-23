'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Search, Star } from "lucide-react"

export default function RideHistoryPage() {
  const rideHistory = [
    {
      id: 1,
      date: "2023-04-15",
      driver: "John Doe",
      fare: "₦1,500",
      rating: 5,
    },
    {
      id: 2,
      date: "2023-04-10",
      driver: "Jane Smith",
      fare: "₦2,000",
      rating: 4,
    },
    {
      id: 3,
      date: "2023-04-05",
      driver: "Mike Johnson",
      fare: "₦1,800",
      rating: 5,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-teal-600">Ride History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Past Rides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center space-x-2">
            <Input placeholder="Search by date or driver" className="max-w-sm" />
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Fare</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rideHistory.map((ride) => (
                <TableRow key={ride.id}>
                  <TableCell>{ride.date}</TableCell>
                  <TableCell>{ride.driver}</TableCell>
                  <TableCell>{ride.fare}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {[...Array(ride.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Receipt
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}