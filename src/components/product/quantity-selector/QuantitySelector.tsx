'use client'
import { useState } from "react"
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface Props {
  quantity: number
}

export default function QuantitySelector({ quantity }: Props) {

  const [counter, setCounter] = useState(quantity)

  const onQuantityChange = (value: number) => {
    if (counter + value < 1) return


    setCounter(counter + value)
  }

  return (
    <div className="flex">
      <button onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="flex justify-center items-center w-20 mx-3 px-5 bg-gray-200 text-center rounded-md">
        {counter}
      </span>

      <button  onClick={() => onQuantityChange(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  )
}