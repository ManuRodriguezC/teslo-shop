import { stockBySlug } from "@/app/actions/products/get-stock-by-slug";
import { useEffect, useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface Props {
  quantity: number;
  onQuantityChange: (num: number) => void;
  slug: string;
}

export default function QuantitySelector({ quantity, onQuantityChange, slug}: Props) {

  const [stock, setStock] = useState<number>(0)

  useEffect(() => {
    getStock()
  }, [])

  const getStock = async () => {
    const currentStock = await stockBySlug(slug)
    setStock(currentStock)
  }

  const handleChange = (value: number) => {
    if (value + quantity > stock) {
      return
    }
    if (quantity + value < 1 || quantity + value > 10) return
    onQuantityChange(quantity + value)
  }

  return (
    <div className="flex">
      <button onClick={() => handleChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="flex justify-center items-center w-20 mx-3 px-5 bg-gray-200 text-center rounded-md">
        {quantity}
      </span>

      <button  onClick={() => handleChange(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  )
}