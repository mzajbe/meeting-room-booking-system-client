
import { motion } from 'framer-motion';

import member1 from '../../assets/images/member-1.jpg'
import member2 from '../../assets/images/member-2.jpg'
import member3 from '../../assets/images/member-3.jpg'
import member4 from '../../assets/images/member-4.jpg'
import member5 from '../../assets/images/member-5.jpg'

// Define team member data  
const teamMembers = [  
    {  
      name: 'M.Zajbe',  
      title: 'CEO & Founder',
      image: member1,
      bio: 'Zajbe is a passionate entrepreneur with a vision to revolution.',  
    },  
    {  
      name: 'Akbar',  
      title: 'Chief Marketing Officer',  
      image: member5,  
      bio: 'Jane is a creative strategist with a proven track record in management',  
    },  
    {  
      name: 'alison',  
      title: 'Sales Manager',  
      image: member2,  
      bio: 's a skilled sales professional with a proven track record of closing deals and building strong relationships with clients.',  
    },  
    {  
      name: 'Sarah Johnson',  
      title: 'Chief Technology Officer',  
      image: member3,  
      bio: 'Sarah is a skilled software engineer with expertise in cloud infrastructure and scalable systems.',  
    },  
    {  
      name: 'David Lee',  
      title: 'Director of Operations',  
      image: member4,  
      bio: 'David is a seasoned operations professional with a focus on efficiency and process improvement.',  
    },  
  ];  

const AboutUs = () => {

    

    return (
        <div className="bg-gray-100 py-20">  
        <div className="container mx-auto px-4">  
          <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>  
  
           
          <motion.div  
            initial={{ opacity: 0, y: 50 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.8, delay: 0.2 }}  
            className="mb-16"  
          >  
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>  
            <p className="text-lg text-gray-600">  
            To provide a seamless and efficient platform for booking meeting rooms, empowering businesses to optimize their workspace and enhance productivity.  
            </p>  
          </motion.div> 
            
          <motion.div  
            initial={{ opacity: 0, y: 50 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.8, delay: 0.4 }}  
            className="mb-16"  
          >  
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>  
            <p className="text-lg text-gray-600">  
            Founded in 2024, Meeting Nest emerged from a vision to revolutionize the way meeting rooms are booked. With a passion for innovation and a commitment to customer satisfaction, we have grown into a leading provider of meeting room booking solutions. 
            </p>  
          </motion.div>  
  
          {/* Meet the Team Section */}  
          <motion.div  
            initial={{ opacity: 0, y: 50 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.8, delay: 0.6 }}  
            className="mb-16"  
          >  
            <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
              {teamMembers.map((member, index) => (  
                <div key={index} className="bg-white rounded-lg shadow-md p-6">  
                  <div className="flex items-center mb-4">  
                    <img  
                      src={member.image}  
                      alt={member.name}  
                      className="w-16 h-16 rounded-full mr-4"  
                    />  
                    <div>  
                      <h3 className="text-xl font-bold">{member.name}</h3>  
                      <p className="text-gray-600">{member.title}</p>  
                    </div>  
                  </div>  
                  <p className="text-gray-600">{member.bio}</p>  
                </div>  
              ))}  
            </div>  
          </motion.div>  
        </div>  
      </div>  
    );
};

export default AboutUs;