"use client";

import { Color, Size } from '@/type';
import React from 'react'

interface MobileFilterProps {
    sizes: Size[];
    colors: Color[];
}
export default function MobileFilter({
    sizes,colors
}:MobileFilterProps) {
  return (
    <div>
      Mobile Filter
    </div>
  )
}
