'use client'
import { Product } from "@/interfaces/product.interface"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
  product: Product
}

export default function ProductGridItem({ product }: Props) {

  const [displayImage, setDisplayImage] = useState(product.images[0])

  return (
      <div className="rounded-md overflow-hidden fede-in">
        <Link
          href={`/product/${product.slug}`}>
          <Image
            onMouseEnter={() => setDisplayImage(product.images[1])}
            onMouseLeave={() => setDisplayImage(product.images[0])}
            src={`/products/${displayImage}`}
            alt={product.title}
            className="w-full object-cover rounded-sm"
            width={500}
            height={500}
          />
        </Link>

        <div className="p-4 flex flex-col">
          <Link
            className="hover:text-blue-800"
            href={`/product/${product.slug}`}>
            {product.title}
          </Link>
          <span className="font-bold">${product.price}</span>
        </div>
      </div>
    )
}