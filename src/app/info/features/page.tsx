import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import Features from '@/components/sections/Features'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default page
