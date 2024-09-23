'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardDescription>Get new password</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Enter your Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">Request Verification Link</Button>
          </form>
          <div className="mt-4 text-center">
            
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            
            <Link href="/login" className="text-teal-600 hover:underline">
              Go back to Login page
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}