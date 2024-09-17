'use client'

import type { Size } from "@/interfaces/product.interface"
import { useState } from "react";
import clsx from "clsx";

interface Props {
  selecterSize: Size;
  availableSize: Size[];
}

export default function SizeSelector({ selecterSize, availableSize }: Props) {

  const [currentSizeSelector, setCurrentSizeSelector] = useState(selecterSize)

  return (
    <div className="my-5 ">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {
          availableSize.map( size => (
            <button
              onClick={() => setCurrentSizeSelector(size)}
              key={size}
              className={
                clsx(
                  "mx-2 hover:bg-blue-200 w-10 h-10 p-1 rounded-full text-lg transition-all duration-200",
                  {
                    'bg-blue-200': currentSizeSelector === size
                  }
              )}
            >
              {size}
            </button>
          ))
        }
      </div>

    </div>
  )
}