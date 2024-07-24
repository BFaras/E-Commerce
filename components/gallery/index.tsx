
"use client";

import React from 'react'
import { Image as ImageType} from "@/type";
import { Tab } from '@headlessui/react';

interface GalleryProps {
    images: ImageType[];
}

export default function Gallery({images}: GalleryProps) {

  return (
    <div>
      <Tab.Group as="div" className={"flex flex-col-reverse"}>
        <div className='mx-auto mt-6 hidden w-full max-2-2xl sm:block lg:max-w-none'>
            <Tab.List className= "grid grid-cols-4 gap-6">
                {images.map((image) => (
                    <GalleryTab key={image.id}></GalleryTab>
                ))}
            </Tab.List>
        </div>
      </Tab.Group>
    </div>
  )
}
