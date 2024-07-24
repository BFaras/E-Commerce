import React from 'react'
import Image from "next/image"
import {Tab} from "@headlessui/react"

import {Image as ImageType} from "@/type"

interface GalleryTabProps {
    image:ImageType
}

export default function GalleryTab({image}: GalleryTabProps) {
  return (
    <Tab className={"relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"}>
        {({selected})=> (
            <div>
                <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                    <Image
                        alt=""
                        src={image.url}
                        fill
                        objectFit='cover'
                        className="object-cover object-center"
                    />

                </span>
                <span className='cn'>

                </span>
            </div>
        )}
    </Tab>
  )
}
