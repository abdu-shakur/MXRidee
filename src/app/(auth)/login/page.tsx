'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-teal-600">Welcome Back</CardTitle>
          <CardDescription>Log in to your MXRidee account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">Log In</Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-sm text-teal-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&app;t have an account?{" "}
            <Link href="/register" className="text-teal-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}