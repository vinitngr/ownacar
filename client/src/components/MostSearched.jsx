// import carList from "./data/fakeData";
import fakeData from "./data/fakeData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CarItem from "./CarItem";

function MostSearched() {
    console.log(fakeData.carList)
  if (!fakeData.carList) {
    return <div>no data</div>;
  }


  return (
    <div className="mx-20 mt-24">
      <div className=" text-center text-3xl underline p-3 googlehandfont ">
        Most Searched Cars
      </div>

      <Carousel >
        <CarouselContent >
          {fakeData.carList.map((car, index) => (
            <CarouselItem className='basis-1/4 -translate-x-16' key={index}>
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  className='bg-blue-700 text-white '/>
        <CarouselNext className='bg-blue-700 text-white' />
      </Carousel>

    
    </div>
  );
}

export default MostSearched;

