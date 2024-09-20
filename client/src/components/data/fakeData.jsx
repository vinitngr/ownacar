
import { faker } from '@faker-js/faker';

function RandomCarList() {
    return {
        // name: faker.vehicle.vehicle(),
        // type: faker.vehicle.type(),
        // maker: faker.vehicle.manufacturer(),
        // price: faker.commerce.price({
        //     min: 1000,
        //     max: 100000,
        // }),

        // miles: faker.random.numeric(),
        // geartype: "manual", 
        // power: faker.random.numeric(), 
        name:faker.vehicle.vehicle(),
        type:faker.vehicle.type(),
        model: faker.vehicle.model(),
        Fuel: faker.vehicle.fuel(),
        image: faker.image.url(),
        miles: faker.number.int({ min: 1000, max: 100000 }),    
        geartype: 'automatic',
        price: faker.commerce.price({ min: 1000, max: 100000 }),
        year:faker.number.int({ min: 2005, max: 2024 }), 
    }
}

const carList = faker.helpers.multiple(RandomCarList, {
    count: 10,
});
export default {carList};
