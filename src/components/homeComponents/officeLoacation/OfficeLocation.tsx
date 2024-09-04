

interface LocationProps {
    address: string;
    googleMapsLink: string;
  }

const OfficeLocation: React.FC<LocationProps> = ({ address, googleMapsLink }) => {
    return (
        <section className="flex items-center justify-end">
      <div className="p-4  rounded-lg ">
        <h2 className="text-lg font-bold mb-2">Level-4, 34, Awal Centre, Dhaka 1213</h2>
        <p className="text-gray-700">{address}</p>
        <a href={googleMapsLink} target="_blank" className="text-customPrimary hover:underline">
          View on Google Maps
        </a>
      </div>
    </section>
    );
};

export default OfficeLocation;