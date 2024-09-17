// import { notFound } from "next/navigation"
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces/product.interface";

const products = initialData.products

interface Props {
  params: {
    id: Category
  }
}


export default function CategoryPage({ params }: Props) {
  const { id } = params
  const filterProducts = products.filter(product => product.gender === id)

  const titles: Record<Category, string> = {
    'men': ' para Hombres',
    'women': 'para Mujeres',
    'kid': 'para Niños',
    'unisex': 'para Todos'
  }

  const subTitles = {
    'men': 'para Ellos',
    'women': 'para Ellas',
    'kid': 'para los mas peques',
    'unisex': 'para Todos'
  }

  // if (id !== 'men' || id !== 'women' || id !== 'kid') {
  //   return notFound()
  // }

  return (
    <div className="flex flex-col">
      <Title
        title={`Articulos ${titles[id]}`}
        subtitle={`Todo ${subTitles[id]}`}
        className="mb-2"
      />
      <ProductGrid products={filterProducts}/>
    </div>
  )
}