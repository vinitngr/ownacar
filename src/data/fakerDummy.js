import { faker } from "@faker-js/faker/.";
const generateListing = () => {
    return {
      sellersId: Math.random().toString(36).substring(2, 10), // Random ID
      createdAt: faker.date.recent(),
      listingTitle: `${faker.date.past().getFullYear()} ${faker.vehicle.model()}`,
      tagline: faker.company.catchPhrase(),
      originalPrice: parseFloat(faker.commerce.price({ min: 20000, max: 100000, dec: 0 })),
      sellingPrice: parseFloat(faker.commerce.price({ min: 10000, max: 90000, dec: 0 })),
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
      year: faker.date.past({ years: 20 }).getFullYear(),
      driveType: faker.helpers.arrayElement(['4WD', 'FWD', 'RWD', 'AWD']),
      cylinder: faker.number.int({ min: 3, max: 8 }),
      color: faker.helpers.arrayElement([
        'Red', 'Blue', 'Green', 'Black', 'White', 'Gray', 'Other',
      ]),
      fuelType: faker.helpers.arrayElement(['Gasoline', 'Electric', 'Hybrid']),
      vin: faker.vehicle.vin(),
      engineSize: faker.number.int({ min: 1000, max: 5000 }),
      mileage: faker.number.int({ min: 5, max: 50 }),
      transmission: faker.helpers.arrayElement([
        'Automatic', 'Manual', 'CVT', 'Semi-Automatic',
      ]),
      listingDescription: faker.lorem.paragraph(),
      features: JSON.stringify(generateRandomFeatures()),
      imageUrl: faker.image.urlLoremFlickr({ category: 'car' }),
      userImageUrl: faker.image.avatarGitHub(),
      userEmail: faker.internet.email(),
      username: faker.person.fullName(),
    };
  };
  