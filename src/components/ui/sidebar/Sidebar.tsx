'use client'
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";

interface Links {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const linksUsers: Links[] = [
  {
    name: 'Perfin',
    href: '/',
    icon: <IoPersonOutline size={30}/>
  },
  {
    name: 'Ordenes',
    href: '/',
    icon: <IoTicketOutline size={30}/>
  },
  {
    name: 'Ingresar',
    href: '/',
    icon: <IoLogInOutline size={30}/>
  },
  {
    name: 'Salir',
    href: '/',
    icon: <IoLogOutOutline size={30}/>
  }
]

const linksAdmin: Links[] = [
  {
    name: 'Productos',
    href: '/',
    icon: <IoShirtOutline size={30}/>
  },
  {
    name: 'Ordenes',
    href: '/',
    icon: <IoTicketOutline size={30}/>
  },
  {
    name: 'Usuarios',
    href: '/',
    icon: <IoPeopleOutline size={30}/>
  },
]

export default function SideBar() {

  const sideMenuOpen = useUIStore(state => state.isSideMenuOpen)
  const closeMenu = useUIStore(state => state.closeSideMenu)

  return (
    <div>
      {
        sideMenuOpen
        &&
        <div
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"/>
      }

      {
        sideMenuOpen
        &&
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"/>
      }
      <nav
        className={
          clsx(
            "fixed p-5 right-0 top-0 w-[320px] sm:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
            {
              "translate-x-full": !sideMenuOpen
            }
          )
        }>

        <IoCloseOutline size={50} className="absolute top-5 cursor-pointer right-5" onClick={closeMenu} />
        
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded px-10 py-1 border-b-2 text-xl
            border-gray-200 focus:outline-none focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-50"
          />
        </div>

        {linksUsers.map(({name, href, icon}) => (
          <Link
          key={name}
          href={href}
          className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
          >
          {icon}
          <span className="ml-3 text-xl">{name}</span>
        </Link>
        ))}

        <div className="w-full h-px bg-gray-200 mb-5">

        {linksAdmin.map(({name, href, icon}) => (
          <Link
          key={name}
          href={href}
          className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
          >
          {icon}
          <span className="ml-3 text-xl">{name}</span>
        </Link>
        ))}

        </div>

      </nav>

    </div>
  )
}