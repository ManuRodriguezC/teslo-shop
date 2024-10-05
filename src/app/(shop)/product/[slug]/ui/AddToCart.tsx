'use client'
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import { Product, Size } from "@/interfaces/product.interface";
import { useState } from "react";

interface Props {
  product: Product
}

export default function AddToCard({ product }: Props) {

  const [size, setSize] = useState<Size|undefined>()
  const [quantity, setQuantity] = useState<number>(1)
  const [controlSelect, setControlSelect] = useState(false)

  const addToCard = () => {
    setControlSelect(true)
    if (!size) return

    console.log({size, quantity})
  }
  return (
    <>
      {controlSelect && !size &&<span className="text-red-400 fade-in">Debe seleccionar una talla antes de agregar al carrito</span>}

      {/* Selector de Tallas */}
      <SizeSelector availableSize={product.sizes} selecterSize={size} onSizeChange={setSize} />

      {/* Selector de cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} slug={product.slug} />

      {/* Boton */}
      <button
      onClick={addToCard}
      className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  )
}