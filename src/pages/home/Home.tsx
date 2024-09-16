import CustomerTestimonials from "../../components/homeComponents/customerTestimonials/CustomerTestimonials";
import FeaturedRooms from "../../components/homeComponents/featuredRooms/FeaturedRooms";
import Hero from "../../components/homeComponents/hero/Hero";
import HowItWorks from "../../components/homeComponents/howItWorks/HowItWorks";
import OfficeLocation from "../../components/homeComponents/officeLoacation/OfficeLocation";
import ServiceAdvertisement from "../../components/homeComponents/serviceAdvertisement/ServiceAdvertisement";
import WhyChooseUs from "../../components/homeComponents/whyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <OfficeLocation address={""} googleMapsLink={"https://maps.app.goo.gl/iV9jSresh7XhaEe19"}></OfficeLocation>
            <ServiceAdvertisement></ServiceAdvertisement>
            <FeaturedRooms></FeaturedRooms>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <CustomerTestimonials></CustomerTestimonials>
            
        </div>
    );
};

export default Home;