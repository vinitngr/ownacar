import Search from "../Search";
import { listingsTable } from "@/lib/schema";

import Header from "../Header";
import Skeleton from "../Skeleton";
import Carscard from "../Carscard";
import { faker } from '@faker-js/faker';
import { drizzle } from 'drizzle-orm';
import { useState } from "react";

function SearchCars() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dummyLoading, setDummyLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  

  const generateListing = () => {
    return {
      sellersId: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      listingTitle: `${faker.year()} ${faker.vehicle.model()}`,
      tagline: faker.company.catchPhrase(),
      originalPrice: parseFloat(faker.commerce.price(20000, 100000, 0)),
      sellingPrice: parseFloat(faker.commerce.price(10000, 90000, 0)),
      category: faker.helpers.arrayElement([
        'Sedan', 'SUV', 'Coupe', 'Hybrid', 'Convertible', 'Minivan', 'Truck', 'Electric', 'Hatchback',
      ]),
      condition: faker.helpers.arrayElement([
        'New', 'Used - Like New', 'Used - Good', 'Used - Fair', 'Old',
      ]),
      type: faker.helpers.arrayElement(['Casual', 'Premium', 'Luxury']),
      maker: faker.helpers.arrayElement([
        'Toyota', 'Ford', 'Honda', 'Chevrolet', 'Nissan', 'Volkswagen',
        'Hyundai', 'Kia', 'BMW', 'Mercedes-Benz', 'Jeep', 'Rolls-Royce',
        'Audi', 'Porsche', 'Jaguar', 'TATA', 'Mahindra', 'Lamborghini',
        'Ferrari', 'Bentley', 'Aston-Martin', 'Bugatti', 'McLaren', 'Other',
      ]),
      year: faker.date.between('2000-01-01', '2023-01-01').getFullYear(),
      driveType: faker.helpers.arrayElement(['4WD', 'FWD', 'RWD', 'AWD']),
      cylinder: faker.datatype.number({ min: 3, max: 8 }),
      color: faker.helpers.arrayElement([
        'Red', 'Blue', 'Green', 'Black', 'White', 'Gray', 'Other',
      ]),
      fuelType: faker.helpers.arrayElement(['Gasoline', 'Electric', 'Hybrid']),
      vin: faker.vehicle.vin(),
      engineSize: faker.datatype.number({ min: 1000, max: 5000 }),
      mileage: faker.datatype.number({ min: 5, max: 50 }),
      transmission: faker.helpers.arrayElement([
        'Automatic', 'Manual', 'CVT', 'Semi-Automatic',
      ]),
      listingDescription: faker.lorem.paragraph(),
      features: JSON.stringify(generateRandomFeatures()),
      imageUrl: faker.image.imageUrl(800, 600, 'car', true),
      userImageUrl: faker.internet.avatar(),
      userEmail: faker.internet.email(),
      username: faker.name.findName(),
    };
  };

  const generateRandomFeatures = () => {
    const featuresList = [
      'tachometer', 'self_driving', 'power_windows', 'rear_parking_sensors', 'sunroof',
      'air_conditioning', 'bluetooth', 'gps_navigation', 'keyless_entry', 'heated_seats',
      'adaptive_headlights', 'fog_lights', 'lane_departure_warning', 'blind_spot_detection',
      'remote_start', 'cruise_control', 'traction_control', 'autonomous_parking', 'front_collision_warning'
    ];

    return featuresList.reduce((acc, feature) => {
      acc[feature] = faker.datatype.boolean();
      return acc;
    }, {});
  };

  const handleAddDummyData = async () => {
    setDummyLoading(true);
    setMessage('');
    try {
      const listings = [];
      for (let i = 0; i < 20; i++) {
        listings.push(generateListing());
      }

      // Insert dummy data into the database using Drizzle ORM
      for (const listing of listings) {
        await drizzle.insert(listingsTable).values(listing); // Ensure this is correct for your Drizzle setup
      }

      setMessage('Dummy data added successfully!');
    } catch (error) {
      setMessage(`Error adding data: ${error.message}`);
    } finally {
      setDummyLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h1>Add Dummy Data</h1>
        <button onClick={handleAddDummyData} disabled={dummyLoading} className="btn">
          {dummyLoading ? 'Adding Data...' : 'Add 20 Dummy Listings'}
        </button>
        {message && <p>{message}</p>}
      </div>
      <div className="flex justify-center bg-[#DBEAFE] p-10">
        <Search />
      </div>
      <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6 p-10">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
        ) : listings.length > 0 ? (
          listings.map((listing, index) => <Carscard key={index} listing={listing} />)
        ) : (
          <p>No listings available.</p>
        )}
      </div>
    </div>
  );
}

export default SearchCars;
