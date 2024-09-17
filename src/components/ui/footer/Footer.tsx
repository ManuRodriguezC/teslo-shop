import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full justify-center text-sm mb-10">
      <Link href={"/"} className="mx-3">
        <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
        <span>| Shop</span>
        <span>© { new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacidad & Legal
      </Link>

      <Link href="/" className="mx-3">
        Ubicaciones
      </Link>

      <Link href="/" className="mx-3">
        Redes Sociales
      </Link>
    </div>
  )
}