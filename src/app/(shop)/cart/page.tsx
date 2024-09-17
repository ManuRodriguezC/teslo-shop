import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[2],
  initialData.products[2],
]

export default function CartPage() {

  if (productsInCart.length <= 0) redirect('/empty')

  return (
    <div className="flex justify-center items-center mb-20 px-10 sm:px-5">

      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito de Compras" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link href="/" className="underline mb-5">
              Continúar comprando
            </Link>

            {/* Items */}
            {
              productsInCart.map(product => (
                <div key={product.slug} className="flex mb-5">
                  <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={140}
                    height={140}
                    className="mr-5 rounded-md"
                  />
                  <div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <QuantitySelector quantity={3} />
                    <button className="underline mt-3">
                      Remover
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

            {/* Checkout -Resumen de ordern */}
            <div className="bg-white rounded-xl shadow-xl p-7 h-[300px]">
              <h2 className="text-2xl mb-2">Resumen de Orden</h2>
              <div className="grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right">{productsInCart.length} articulos</span>

                <span>Subtotal</span>
                <span className="text-right">$ 100</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">$15</span>

                <span className="mt-5 text-2xl font-bold">Total</span>
                <span className="mt-5 text-2xl font-bold text-right">$115</span>

              </div>

              <div className="mt-5 mb-2 w-full">
                <Link className="flex btn-primary justify-center" href={"/checkout/address"}>Checkout</Link>
              </div>

            </div>

        </div>

      </div>
    </div>
  )
}