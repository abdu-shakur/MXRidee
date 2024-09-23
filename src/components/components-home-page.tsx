'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MapPin, Shield, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HomePageComponent() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="bg-teal-600 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Get a Ride in Minna, Anytime, Anywhere!</h1>
        <p className="mb-8 text-xl">Effortless, fast, and secure rides within Minna.</p>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Link href="/book-ride" className="w-full bg-coral-500 text-white hover:bg-coral-600 md:w-auto">
            Book a Ride Now
          </Link>
          <div className="flex space-x-4">
            <Link href="#" className="inline-block">
              <Image src="/placeholder.svg?height=50&width=150" alt="Get it on Google Play" width={150} height={50} />
            </Link>
            <Link href="#" className="inline-block">
              <Image src="/placeholder.svg?height=50&width=150" alt="Download on the App Store" width={150} height={50} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <MapPin className="h-12 w-12 text-teal-600" />,
      title: "Real-Time Tracking",
      description: "Know exactly where your ride is and when it will arrive.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-teal-600" />,
      title: "Easy Payments",
      description: "Multiple payment options for your convenience.",
    },
    {
      icon: <Shield className="h-12 w-12 text-teal-600" />,
      title: "Safe and Verified Drivers",
      description: "All our drivers are thoroughly vetted for your safety.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-teal-600">Why Choose MXRidee?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amina Ibrahim",
      rating: 5,
      text: "MXRidee has made getting around Minna so much easier. The drivers are always on time and very professional.",
    },
    {
      name: "Chukwu Emeka",
      rating: 4,
      text: "Great service! The app is user-friendly and the fares are reasonable. Highly recommended!",
    },
    {
      name: "Fatima Bello",
      rating: 5,
      text: "I feel safe using MXRidee, especially for late-night rides. The drivers are well-trained and courteous.",
    },
  ]

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-teal-600">What Our Riders Say</h2>
        <Carousel className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-4 text-gray-600">{testimonial.text}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}