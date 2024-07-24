"use client";

import React from 'react';
import { Image as ImageType } from "@/type";
import { Tab } from '@headlessui/react';
import GalleryTab from './gallery-tab';
import Image from 'next/image'; // Import Image from Next.js for optimized images

interface GalleryProps {
    images: ImageType[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div>
      <Tab.Group as="div" className="flex flex-col-reverse">
        <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
          <Tab.List className="grid grid-cols-4 gap-6">
            {images.map((image) => (
              <GalleryTab key={image.id} image={image} />
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="aspect-square w-full">
          {images.map((image) => (
            <Tab.Panel key={image.id} className="aspect-square">
              <div className='relative h-full w-full sm:rounded-lg overflow-hidden'> 
                <Image
                  fill
                  src={image.url}
                  alt="Image"
                  className="object-cover object-center"
                />
              </div>
            </Tab.Panel>
            
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}