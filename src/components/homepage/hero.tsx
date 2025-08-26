"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  const slides = [
    {
      title: "Welcome to Obaba.com",
      desc: "Discover a wide range of amazing products tailored just for you.",
      bg: "bg-blue-100 dark:bg-blue-900",
    },
    {
      title: "Manage Your Products",
      desc: "Easily add, edit, and showcase your products with a simple dashboard.",
      bg: "bg-green-100 dark:bg-green-900",
    },
    {
      title: "Shop Smart",
      desc: "Enjoy seamless browsing, quick checkout, and secure payments.",
      bg: "bg-purple-100 dark:bg-purple-900",
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-5xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {slides.map((slide, i) => (
              <CarouselItem key={i}>
                <div
                  className={`${slide.bg} rounded-xl p-12 text-center flex flex-col items-center justify-center min-h-[300px]`}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg max-w-xl">{slide.desc}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
