export const revalidate = 60

import { getPaginatedProductsWithImages } from "@/app/actions/products/product-pagination";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Pagination from "@/components/ui/pagination/Pagination";
import Title from "@/components/ui/title/Title";
import { redirect } from "next/navigation";
import { Gender } from "@prisma/client";

interface Props {
  params: {
    gender: string
  },
  searchParams: {
    page?: string
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params
  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const { products, totalPages } = await getPaginatedProductsWithImages({ page, gender: gender as Gender })

  if (products.length === 0) redirect(`/gender/${gender}`)

  const titles: Record<string, string> = {
    'men': ' para Hombres',
    'women': 'para Mujeres',
    'kid': 'para Niños',
    'unisex': 'para Todos'
  }

  const subTitles: Record<string, string> = {
    'men': 'para Ellos',
    'women': 'para Ellas',
    'kid': 'para los mas peques',
    'unisex': 'para Todos'
  }

  return (
    <div className="flex flex-col">
      <Title
        title={`Articulos ${titles[gender]}`}
        subtitle={`Todo ${subTitles[gender]}`}
        className="mb-2"
      />
      <ProductGrid products={products}/>

      <Pagination totalPage={totalPages} />

    </div>
  )
}