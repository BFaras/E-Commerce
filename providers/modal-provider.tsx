"use client";

import PreviewModal from '@/components/preview-modal'
import React, { useEffect, useState } from 'react'

export default function ModalProvider() {


  const [isMounted,setIsMounted] = useState(false)

  useEffect(() => {
      setIsMounted(true)
  }, [])
  if (!isMounted) {
      return null
  }
  console.log("help")
  return ( 
    <>
        <PreviewModal></PreviewModal>
        <PreviewModal></PreviewModal>
    </>
  )
}
