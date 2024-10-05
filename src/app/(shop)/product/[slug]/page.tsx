export const revalidate = 604800

import { getProductBySlog } from "@/app/actions/products/get-product-by-slug"
import SliceShowMovil from "@/components/product/slideshow/ProductMovileSliceShow"
import SliceShow from "@/components/product/slideshow/ProductSliceShow"
import StockLabel from "@/components/product/stock-label/StockLabel"
import { titleFont } from "@/config/fonts"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import AddToCard from "./ui/AddToCart"

export async function generateMetadata(
  { params }: Props,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
  // fetch data
  const product = await getProductBySlog(slug)
 
  return {
    title: product?.title ?? 'Producto no ecnontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Producto no ecnontrado',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`],
    },
  }
}

interface Props {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params

  const product = await getProductBySlog(slug)

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

        <StockLabel slug={slug}/>

        <h1 className={`${titleFont.className} antialiased font-bold text-3xl`}>
          {product.title}
        </h1>
        <p className="text-3xl my-5">${product.price}</p>

        <AddToCard product={product} />

        {/* Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  )
}