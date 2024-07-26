"use client";

import PreviewModal from '@/components/preview-modal'
import React, { useEffect, useState } from 'react'

export default function ModelProvider() {

    const [isMounted,setIsMounted] = useState(false)


    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (isMounted) {
        return null
    }
  return ( 
    <>
        <PreviewModal></PreviewModal>
    </>
  )
}
