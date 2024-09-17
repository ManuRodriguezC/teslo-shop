import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector"
import SizeSelector from "@/components/product/size-selector/SizeSelector"
import SliceShowMovil from "@/components/product/slideshow/ProductMovileSliceShow"
import SliceShow from "@/components/product/slideshow/ProductSliceShow"
import { titleFont } from "@/config/fonts"
import { initialData } from "@/seed/seed"
import { notFound } from "next/navigation"

interface Props {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: Props) {
  const { slug } = params
  const product = initialData.products.find(product => product.slug === slug)

  if (!product) notFound()

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Slice Show Movil */}
        <SliceShowMovil
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Slice Show de escritorio */}
        <SliceShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-3xl`}>
          {product.title}
        </h1>
        <p className="text-3xl my-5">${product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector availableSize={product.sizes} selecterSize={product.sizes[0]} />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={1} />

        {/* Boton */}
        <button className="btn-primary my-5">
          Agregar al carrito
        </button>

        {/* Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  )
}