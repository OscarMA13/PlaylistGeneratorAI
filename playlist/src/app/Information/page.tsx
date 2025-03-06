import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import GridLayout from "@/components/ui/gridlayout";
import { Input } from "@/components/ui/input";



export default function Information() {
    return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 bg-gradient-to-b from-black to-green-800 text-white">
     <Carousel>
  <CarouselContent >
  <CarouselItem className="grid grid-rows-[1fr_auto] justify-center items-center max-w-full gap-16">
        <div className="text-4xl font-semibold text-center grid grid-rows-2 gap-5"> Select Genre's
        <Input/>
        </div>
        <GridLayout/>
        </CarouselItem>
    <CarouselItem className="flex flex-col justify-center items-center max-w-full gap-16">
        <div className="text-4xl font-semibold"> Select Your Artist's
        <Input/>
        </div>
        <GridLayout/>
    </CarouselItem>
    <CarouselItem className="flex flex-col justify-center items-center max-w-full gap-16">
        <div className="text-4xl font-semibold"> Select Your Mood's
        <Input/>
        </div>
        <GridLayout/>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
     </div>
    );
  }