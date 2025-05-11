import {
    Twitter,
    LinkedIn,
    Facebook,
    Instagram
  } from '@mui/icons-material';
  
  export default function Footer() {
    return (
      <footer className="bg-gray-50 text-gray-700 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Product */}
          <div>
            <h3 className="text-[#00a859]  font-semibold mb-2" >Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Pricing</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Book Demo</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Product updates</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">SafetyCulture (formerly iAuditor)</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h3 className="text-[#00a859]  font-semibold mb-2" >Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Help Center</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Partner support</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">API developer documentation</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Digitize your checklist</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact us</a></li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h3 className="text-[#00a859]  font-semibold mb-2" >Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Content library</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">App & software guides</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Checklist guides</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Topic guides</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">eBooks</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Blog</a></li>
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-[#00a859]  font-semibold mb-2" >Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Careers</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">News room</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Brand Partnerships</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Meet the leadership team</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Events</a></li>
            </ul>
          </div>
        </div>
  
        <div className="border-t text-xs border-gray-200 py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="space-x-2 mb-2 md:mb-0 text-gray-500">
            <span>Status</span> | 
            <span className='ml-2'>Legal</span> | 
            <span className='ml-2' >Terms and Conditions</span> | 
            <span className='ml-2' >Privacy Portal</span> | 
            <span className='ml-2' >Security</span> | 
            <span className='ml-2' >© 2025</span>
          </div>
          <div className="flex space-x-3 text-gray-600 ">
            <a href="#" className='hover:text-[#00a859]'><Twitter fontSize="small" /></a>
            <a href="#"  className='hover:text-[#00a859]'  ><LinkedIn fontSize="small" /></a>
            <a href="#"  className='hover:text-[#00a859]'  ><Facebook fontSize="small" /></a>
            <a href="#"  className='hover:text-[#00a859]'  ><Instagram fontSize="small" /></a>
          </div>
        </div>
      </footer>
    );
  }
  