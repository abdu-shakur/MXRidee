'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import Image from "next/image"

export default function RatingReviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-teal-600">Rate Your Ride</h1>
      <Card>
        <CardHeader>
          <CardTitle>How was your experience?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex items-center space-x-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=64&width=64" alt="Driver" layout="fill" objectFit="cover" />
            </div>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">Toyota Camry (ABC 123 XY)</p>
            </div>
          </div>
          <div className="mb-6">
            <Label>Rate your driver</Label>
            <div className="mt-2 flex space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Button key={rating} variant="outline" className="p-2">
                  <Star className="h-6 w-6" />
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <Label htmlFor="review">Leave a review (optional)</Label>
            <Textarea
              id="review"
              placeholder="Tell us about your experience..."
              className="mt-2"
            />
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Rate these aspects of your ride:</h4>
            {["Cleanliness", "Punctuality", "Driving Skills", "Friendliness"].map((aspect) => (
              <div key={aspect}>
                <Label>{aspect}</Label>
                <div className="mt-1 flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button key={rating} variant="outline" size="sm">
                      <Star className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-6 w-full bg-teal-600 text-white hover:bg-teal-700">Submit Review</Button>
        </CardContent>
      </Card>
    </div>
  )
}