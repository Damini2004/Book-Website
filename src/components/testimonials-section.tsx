'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  testimonialBg?: ImagePlaceholder;
}

export function TestimonialsSection({ testimonialBg }: TestimonialsSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative py-24 text-white">
      {testimonialBg && (
        <Image src={testimonialBg.imageUrl} alt={testimonialBg.description} layout="fill" objectFit="cover" className="z-0" data-ai-hint={testimonialBg.imageHint} />
      )}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="font-semibold">Testimonial</span>
          <h2 className="text-4xl font-headline font-bold mt-2">Kinds Words From Clients</h2>
        </div>
        
        <div className="relative pt-8 pb-10">
            <Carousel setApi={setApi} opts={{ loop: true }} className="max-w-4xl mx-auto">
            <CarouselContent>
                {testimonials.map((testimonial, index) => {
                const image = PlaceHolderImages.find(p => p.id === testimonial.image);
                return (
                    <CarouselItem key={index} className="text-center">
                        <div className="max-w-2xl mx-auto">
                        <Quote className="h-10 w-10 text-primary mx-auto mb-4" />
                        <p className="text-lg mb-6">{testimonial.text}</p>
                        <div className="flex items-center justify-center">
                            {image && (
                                <Image src={image.imageUrl} alt={testimonial.name} width={60} height={60} className="rounded-full" data-ai-hint={image.imageHint} />
                            )}
                            <div className="pl-4 text-left">
                                <p className="font-bold font-headline">{testimonial.name}</p>
                                <span className="text-sm opacity-80">{testimonial.position}</span>
                            </div>
                        </div>
                        </div>
                    </CarouselItem>
                )
                })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 border-0" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 border-0" />
            </Carousel>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {testimonials.map((_, i) => (
                    <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={cn(
                        "h-2 w-2 rounded-full bg-white/50 transition-all",
                        i === current ? "w-4 bg-white" : "hover:bg-white/80"
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
