'use client'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import { GeneratePaginationNumbers } from "@/utils/generatePaginationNumbers"
import { redirect, usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"

interface Props {
  totalPage: number
}

export default function Pagination({ totalPage}: Props) {

  const pathName = usePathname()
  const searchParams = useSearchParams()

  const pageString = searchParams.get('page') ?? 1
  const currentPage = isNaN(+pageString) ? 1 : +pageString

  if (currentPage < 1 || isNaN(+pageString)) redirect(pathName)

  const controlPrev = currentPage === 1 || currentPage === 0 ? false : true
  const controlNext = currentPage === totalPage ? false : true
  
  const allPages = GeneratePaginationNumbers(currentPage, totalPage)

  const createPageUrl = ( pageNumber: number | string, dir?: boolean) => {
    const params = new URLSearchParams( searchParams )

    if (dir && pageNumber === 1) {
      pageNumber += 1
    }
    if (pageNumber === '...') return `${pathName}?${params.toString()}`

    if ( +pageNumber <= 0) {
      return `${ pathName }`
    }

    if (+pageNumber > totalPage) {
      return `${ pathName }?${params.toString()}`
    }

    params.set('page', pageNumber.toString())
    return `${pathName}?${params.toString()}`
  }

  return (
    <div className="flex text-center justify-center mt-10 mb-32">

      <nav aria-label="Page navigation example">
      
        <ul className="flex list-style-none">
      
          {
            controlPrev && 
            <li className="page-item"><Link
            className={"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"}
            href={createPageUrl(currentPage - 1)}>
            <IoChevronBackOutline size={30} />  
            </Link></li>
}
          {
            allPages.map((pag, index) => (
              <li key={`${pag}-${index}`} className="page-item"><Link
              className={
                clsx(
                  "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-100/70 focus:shadow-none",
                  {
                    "bg-gray-500/50 text-white shadow-2xl": currentPage === pag || (currentPage === 0 && pag === 1)
                  }
                )
              }
              href={createPageUrl(pag)}>{pag}</Link></li>
            ))
          }

          {
            controlNext &&
            <li className="page-item"><Link
            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href={createPageUrl(currentPage + 1, true)}>
              <IoChevronForwardOutline size={30} />
            </Link></li>
          }
        </ul>
      </nav>
    </div>
  )
}