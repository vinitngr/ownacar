import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

function Imgdescription({listing}) {
  return (
    <>
        <Carousel 
        className="rounded overflow-hidden aspect-video" orientation="horizontal">
          <CarouselContent>
            <CarouselItem>
              <img src={listing.imageUrl} className="w-full aspect-video object-cover" alt="car pic" />
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center h-full bg-blue-50">image here</div>
            </CarouselItem>
          </CarouselContent>

          <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2"/>
          <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2"/>
        </Carousel>

        <div className="p-3 border-2 my-4 rounded">
          <div className="text-xl mb-4  font-semibold">Description</div>
          <p className="text-sm font-light my-2">{listing.listingDescription}</p>
        </div>
    </>
  )
}

export default Imgdescription