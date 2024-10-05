import type { Size } from "@/interfaces/product.interface"
import clsx from "clsx";

interface Props {
  selecterSize?: Size;
  availableSize: Size[];
  onSizeChange: (size: Size) => void
}

export default function SizeSelector({ selecterSize, availableSize, onSizeChange }: Props) {


  return (
    <div className="my-5 ">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {
          availableSize.map( size => (
            <button
              onClick={() => onSizeChange(size)}
              key={size}
              className={
                clsx(
                  "mx-2 hover:bg-blue-200 w-10 h-10 p-1 rounded-full text-lg transition-all duration-200",
                  {
                    'bg-blue-600 text-white': selecterSize === size
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