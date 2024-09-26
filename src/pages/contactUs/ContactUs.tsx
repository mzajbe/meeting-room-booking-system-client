import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";


const ContactUs = () => {

    const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [subject, setSubject] = useState('');  
  const [message, setMessage] = useState('');  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  const handleSubmit = async (event: React.FormEvent) => {  
    event.preventDefault();  

    // Here you would typically send the form data to your backend server  
    // using a fetch request or similar method.  
    // For demonstration purposes, we'll just log the data to the console.  
    console.log('Form Data:', { name, email, subject, message });  

    setIsFormSubmitted(true);   
    setTimeout(() => {  
      setName('');  
      setEmail('');  
      setSubject('');  
      setMessage('');  
      setIsFormSubmitted(false);  
    }, 2000);  
  };
    
    return (
        <div className="bg-gray-100 py-20">  
      <div className="container mx-auto px-4">  
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>  

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
          <div className="bg-white rounded-lg shadow-md p-6">  
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>  
            <ul className="list-disc pl-6">  
              <li className="flex items-center mb-2">  
                <Mail className="w-6 h-6 mr-2 text-gray-600" />  
                <a href="mailto:info@yourcompany.com" className="text-gray-600 hover:text-blue-500">  
                  mzajbe@gmail.com  
                </a>  
              </li>  
              <li className="flex items-center mb-2">  
                <Phone className="w-6 h-6 mr-2 text-gray-600" />  
                <a href="tel:+15551234567" className="text-gray-600 hover:text-blue-500">  
                  01643817731 
                </a>  
              </li>  
              <li className="flex items-center">  
                <MapPin className="w-6 h-6 mr-2 text-gray-600" />  
                <address className="text-gray-600">  
                  notun bazar 100 feet  
                </address>  
              </li>  
            </ul>  
          </div>  

          <div className="bg-white rounded-lg shadow-md p-6">  
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>  
            <form onSubmit={handleSubmit}>  
              <div className="mb-4">  
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">  
                  Name  
                </label>  
                <motion.input  
                  type="text"  
                  id="name"  
                  name="name"  
                  value={name}  
                  onChange={(e) => setName(e.target.value)}  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                  whileFocus={{ scale: 1.05 }}  
                  transition={{ duration: 0.2 }}  
                />  
              </div>  
              <div className="mb-4">  
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">  
                  Email  
                </label>  
                <motion.input  
                  type="email"  
                  id="email"  
                  name="email"  
                  value={email}  
                  onChange={(e) => setEmail(e.target.value)}  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                  whileFocus={{ scale: 1.05 }}  
                  transition={{ duration: 0.2 }}  
                />  
              </div>  
              <div className="mb-4">  
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">  
                  Subject  
                </label>  
                <motion.input  
                  type="text"  
                  id="subject"  
                  name="subject"  
                  value={subject}  
                  onChange={(e) => setSubject(e.target.value)}  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                  whileFocus={{ scale: 1.05 }}  
                  transition={{ duration: 0.2 }}  
                />  
              </div>  
              <div className="mb-4">  
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">  
                  Message  
                </label>  
                <motion.textarea  
                  id="message"  
                  name="message"  
                  value={message}  
                  onChange={(e) => setMessage(e.target.value)}  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                  whileFocus={{ scale: 1.05 }}  
                  transition={{ duration: 0.2 }}  
                />  
              </div>  
              <button  
                type="submit"  
                className="bg-customAccent2 hover:bg-customAccent3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
                disabled={isFormSubmitted}  
              >  
                {isFormSubmitted ? 'Submitting...' : 'Send Message'}  
              </button>  
            </form>  
          </div>  
        </div>  
      </div>  
    </div>
    );
};

export default ContactUs;