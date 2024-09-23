/// import carList from "./data/fakeData";
import fakeData from "../data/fakeData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CarItem from "./CarItem";

function MostSearched() {
  if (!fakeData.carList) {
    return <div>no data</div>;
  }


  return (
    <div className="mx-20 mt-24">
      <div className=" text-center text-3xl p-3 googlehandfont ">
        Most Searched Cars
      </div>

      <Carousel >
        <CarouselContent >
          {fakeData.carList.map((car, index) => (
            <CarouselItem className='flex justify-center md:basis-1/2 lg:basis-1/3 mx-3 2xl:basis-1/4 ' key={index}>
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext/>
      </Carousel>

    
    </div>
  );
}

export default MostSearched;

