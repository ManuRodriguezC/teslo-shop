import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[2],
  initialData.products[2],
]

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-20 px-10 sm:px-5">

      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajusta tu Compra</span>
            <Link href="/cart" className="underline mb-5">
              Modificar Orden
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
                    <p>${product.price} x 3</p>
                    <sub className="font-bold text-lg">Subtotal: {product.price * 3}</sub>
                  </div>
                </div>
              ))
            }
          </div>

            {/* Checkout -Resumen de ordern */}
            <div className="bg-white rounded-xl shadow-xl p-7 h-[550px]">

              <h2 className="text-2xl mb-2">Direccion de entrega</h2>
              <div className="mb-10">
                <p className="text-xl">Manu Rodirguez C</p>
                <p className="font-bold text-xl">Av. calle 154 # 153 - 65</p>
                <p>Bogota DC - Cundinamarca</p>
                <p>Telefono: 3194834763</p>
              </div>

              <div className="w-full h-0.5 rounded bg-gray-300 mb-10"/>

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

              <p className="mb-5">
                <span className="text-xs">
                  Al hacer clic en <strong>Colocar Orden</strong>, aceptas nuestros <a href="#" className="underline font-semibold">términos y condiciones</a> y <a href="#" className="underline font-semibold">políticas de privacidad</a>
                </span>
              </p>

              <div className="mt-5 mb-2 w-full">
                <Link className="flex btn-primary justify-center" href={"/orders/123"}>Colocar Orden</Link>
              </div>

            </div>

        </div>

      </div>
    </div>
  )
}