import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import Walkthrough from '@/components/sections/Walkthrough'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Walkthrough />
      </main>
      <Footer />
    </div>
  )
}

export default page
