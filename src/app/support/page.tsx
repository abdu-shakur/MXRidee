'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Phone, Mail } from "lucide-react"

export default function HelpSupportPage() {
  const faqs = [
    {
      question: "How do I request a ride?",
      answer: "To request a ride, open the MXRidee app, enter your destination, choose your ride type, and tap 'Request Ride'. You'll be matched with a nearby driver.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "MXRidee accepts various payment methods including credit/debit cards and mobile money. You can add or manage your payment methods in the app settings.",
    },
    {
      question: "How do I contact my driver?",
      answer: "Once you're matched with a driver, you can contact them through the app. Tap the 'Contact' button to call or message your driver.",
    },
    {
      question: "What if I left an item in the car?",
      answer: "If you've left an item in a MXRidee, contact your driver through the app or reach out to our support team. We'll help you get in touch with the driver to retrieve your item.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-teal-600">Help & Support</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Were here to help. Reach out to us anytime.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal-600" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-teal-600" />
                <span>support@mxridee.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-teal-600" />
                <span>Live Chat (24/7)</span>
              </div>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" />
              </div>
              <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}