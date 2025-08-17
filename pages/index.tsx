import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const filters = ["Top Villa", "Self Checkin", "Pool", "Pet Friendly"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
               style={{ backgroundImage: 'url(https://example.com/hero.jpg)' }}>
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="mt-4 text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Section */}
      <section className="flex gap-4 p-6 flex-wrap">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.name}</h3>
              <p className="text-gray-500">{property.address.city}, {property.address.country}</p>
              <p className="mt-2 font-semibold">${property.price}</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
