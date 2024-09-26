import {MailIcon, PhoneIcon, MapPin, Facebook,Twitter,Instagram   } from "lucide-react";


const Footer = () => {
    return (
        <footer className=" bg-customPrimary py-12 text-gray-400">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          <div>  
            <h3 className="text-white text-xl font-bold mb-4">  
              Contact Us  
            </h3>  
            <ul className="space-y-2">  
              <li className="flex items-center">  
                <MailIcon className="w-6 h-6 text-gray-400 mr-2" />  
                <a  
                  href="mailto:info@example.com"  
                  className="hover:text-customAccent1"  
                >  
                  info@example.com  
                </a>  
              </li>  
              <li className="flex items-center">  
                <PhoneIcon className="w-6 h-6 text-gray-400 mr-2" />  
                <a href="tel:+15551234567" className="hover:text-customAccent1">  
                  +1 (555) 123-4567  
                </a>  
              </li>  
              <li className="flex items-center">  
                <MapPin className="w-6 h-6 text-gray-400 mr-2" />  
                <address className="hover:text-customAccent1">  
                  123 Main Street, Anytown, CA 12345  
                </address>  
              </li>  
            </ul>  
          </div>  
          <div>  
            <h3 className="text-white text-xl font-bold mb-4">  
              Social Media  
            </h3>  
            <ul className="flex space-x-4">  
              <li>  
                <a  
                  href="https://www.facebook.com/"  
                  target="_blank"  
                  rel="noopener noreferrer"  
                  className="hover:text-customAccent1"  
                >  
                  <Facebook  className="w-6 h-6" />  
                </a>  
              </li>  
              <li>  
                <a  
                  href="https://www.twitter.com/"  
                  target="_blank"  
                  rel="noopener noreferrer"  
                  className="hover:text-customAccent1"  
                >  
                  <Twitter className="w-6 h-6" />  
                </a>  
              </li>  
              <li>  
                <a  
                  href="https://www.instagram.com/"  
                  target="_blank"  
                  rel="noopener noreferrer"  
                  className="hover:text-customAccent1"  
                >  
                  <Instagram className="w-6 h-6" />  
                </a>  
              </li>  
            </ul>  
          </div>  
          <div>  
            <h3 className="text-white text-xl font-bold mb-4">  
              Additional Links  
            </h3>  
            <ul className="space-y-2">  
              <li>  
                <a  
                  href="/privacy-policy"  
                  className="hover:text-customAccent1"  
                >  
                  Privacy Policy  
                </a>  
              </li>  
              <li>  
                <a href="/terms-of-service" className="hover:text-customAccent1">  
                  Terms of Service  
                </a>  
              </li>  
            </ul>  
          </div>  
        </div>  
        <div className="text-center mt-8">  
          <p className="text-gray-400">&copy; 2024 Example Company. All rights reserved.</p>  
        </div>  
      </div>  
    </footer> 
    );
};

export default Footer;