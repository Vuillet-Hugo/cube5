import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Evenements() {
  return (
    <div className="flex flex-row justify-center w-100 m-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-2/3"
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="m-5 p-3 border-primary">
                  <CardContent className="flex flex-col aspect-square justify-center">
                    <div className="mb-3 text-2xl text-primary">
                      6 AVRIL 2024
                    </div>
                    <div className="mb-3 text-xl">CESI</div>
                    <div className="mb-3">
                      Digital info session CESI on April 6th, 2024!
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
