'use client'
import { stockBySlug } from "@/app/actions/products/get-stock-by-slug";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string
}

export default function StockLabel({ slug }: Props) {
  const [curStock, setCurStock] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getStock()
  }, [])

  const getStock = async () => {
    const res = await stockBySlug(slug)
    setCurStock(res)
    setIsLoading(false)
  }

  return (
    <>
      {
        isLoading
        ?
      <h1 className={`${titleFont.className} antialiased font-bold text-3xl bg-gray-200 animate-pulse`}>
        &nbsp;
      </h1>
        :
      <h1 className={`${titleFont.className} antialiased font-bold text-3xl`}>
        Stock: {curStock}
      </h1>
      }
    </>
  )
}