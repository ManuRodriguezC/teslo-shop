import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} flex flex-col items-center my-10 antialiased text-6xl md:text-9xl`}>404 <span className="text-3xl md:6xl">Not Found</span></h2>
        <p className="font-semibold text-xl">Whooops! Lo sentimos mucho.</p>
        <p>
          <span>Puedes regresar al </span>
          <Link
            href="/"
            className="font-semibold transition-all duration-150 hover:underline"
            >Inicio</Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="starman"
          width={550}
          height={550}
          className="p-5 sm:p-0"
        />
      </div>
    </div>
    )
}