import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input";
  

export default function Information() {
    return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 bg-gradient-to-b from-black to-green-800 text-white">
     <Carousel>
  <CarouselContent >
  <CarouselItem className="grid grid-rows-[1fr_auto] justify-center items-center max-w-screen gap-16">
        <div className="text-4xl font-semibold text-center grid grid-rows-2 gap-5"> Select Genre's
        <Input></Input>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
        <Button>Pop</Button>
        <Button>Rock</Button>
        <Button>Hip hop</Button>
        <Button>R&B</Button>
        <Button>Electronic dance music</Button>
        <Button>Country</Button>
        <Button>Latin</Button>
        <Button>Contemporary soul</Button>
        <Button>Jazz</Button>
        <Button>Classical music</Button>
        <Button>K-pop</Button>
        <Button>Electronic</Button>
        </div>
        </CarouselItem>
    <CarouselItem className="flex flex-col justify-center items-center max-w-screen"><div className="text-4xl font-semibold"> Select Your Artist's</div></CarouselItem>
    <CarouselItem className="flex flex-col justify-center items-center max-w-screen"><div className="text-4xl font-semibold"> Select Your Mood's</div></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
     </div>
    );
  }