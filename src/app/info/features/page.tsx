import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Features</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page
