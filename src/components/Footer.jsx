import React from 'react'

export const Footer = () => {
  return (
<footer className=" left-0 w-full bg-gray-50 py-10 px-12">
  <div className="max-w-7xl mx-auto justify-between ">
    
    {/* Product Section */}
    <div className="mb-4 md:mb-0">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Product</h1>
      <div className="flex flex-wrap gap-4 text-gray-600 text-md">
        <a href="#">Pricing</a>
        <a href="#">Features</a>
        <a href="#">App Download</a>
        <a href="#">Product updates</a>
      </div>
    </div>

    {/* Support Section */}
    <div className='pt-12'>
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Support</h1>
      <div className="flex flex-wrap gap-4 text-gray-600 text-md">
        <a href="#">Help Center</a>
        <a href="#">Contact us</a>
        <a href="#">API docs</a>
        <a href="#">Digitize checklists</a>
      </div>
    </div>

  </div>
</footer>
  )
}
