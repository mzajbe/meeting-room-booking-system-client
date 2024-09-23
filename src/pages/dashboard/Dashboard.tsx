
import { Link } from "react-router-dom";
import { Camera, Calendar, Clipboard } from "lucide-react";

const DashboardCard = ({ to, icon: Icon, title, description, color }) => (
  <Link 
    to={to} 
    className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${color}`}
  >
    <div className="flex items-center space-x-4">
      <div className={`p-3 ${color.replace('border-l-', 'bg-')} bg-opacity-10 rounded-full`}>
        <Icon className={`text-2xl ${color.replace('border-l-', 'text-')}`} size={24} />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  </Link>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard
            to="/create-rooms"
            icon={Camera}
            title="Room Management"
            description="View and manage all rooms"
            color="border-l-blue-500"
          />
          <DashboardCard
            to="/create-slots"
            icon={Calendar}
            title="Slots Management"
            description="Manage available slots for bookings"
            color="border-l-green-500"
          />
          <DashboardCard
            to="/booking-action"
            icon={Clipboard}
            title="Booking Management"
            description="View and manage all bookings"
            color="border-l-purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;