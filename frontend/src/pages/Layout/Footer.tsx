import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
 
 function Footer() {
   return (
     <footer className="bg-gray-100 p-8 mt-10">
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700">
         
         {/* Resources Section */}
         <div className="md:mb-10">
           <h4 className="font-semibold text-lg md:mb-10 mb-2">Resources</h4>
           <ul className="space-y-2">
             <li><a href="#" className="hover:text-black">Send Feedback</a></li>
             <li><a href="#" className="hover:text-black">Become a Member</a></li>
           </ul>
         </div>
 
         {/* Help Section */}
         <div className="md:mb-10">
           <h4 className="font-semibold text-lg md:mb-10 mb-2">Help</h4>
           <ul className="space-y-2">
             <li><a href="#" className="hover:text-black">Get Help</a></li>
             <li><a href="#" className="hover:text-black">Order Status</a></li>
             <li><a href="#" className="hover:text-black">Returns & Cancellations</a></li>
             <li><a href="#" className="hover:text-black">Shipping & Delivery</a></li>
             <li><a href="#" className="hover:text-black">Contact Us</a></li>
           </ul>
         </div>
 
         {/* Company Section */}
         <div className="md:mb-10">
           <h4 className="font-semibold text-lg md:mb-10 mb-2">Company</h4>
           <ul className="space-y-2">
             <li><a href="#" className="hover:text-black">About Us</a></li>
             <li><a href="#" className="hover:text-black">News</a></li>
             <li><a href="#" className="hover:text-black">Careers</a></li>
             <li><a href="#" className="hover:text-black">Corporate</a></li>
           </ul>
         </div>
 
         {/* Follow Us Section */}
         <div className="md:mb-10">
           <h4 className="font-semibold text-lg md:mb-10">Follow Us</h4>
           <div className="flex space-x-4 mt-2 text-gray-600">
             <a href="#" className="hover:text-black"><FaFacebook size={24} /></a>
             <a href="#" className="hover:text-black"><FaInstagram size={24} /></a>
             <a href="#" className="hover:text-black"><FaTiktok size={24} /></a>
             <a href="#" className="hover:text-black"><FaXTwitter size={24} /></a>
             <a href="#" className="hover:text-black"><FaYoutube size={24} /></a>
           </div>
         </div>
       </div>
 
       {/* Divider */}
       <div className="border-t border-gray-300 my-6"></div>
 
       {/* Copyright Notice */}
       <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
     </footer>
   );
 }
 
 export default Footer;