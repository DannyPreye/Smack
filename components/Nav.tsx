import React from "react"
import Link from "next/link"
import { MdMenu, MdClose } from 'react-icons/md'

import { menu } from "../utils/menu"
import Button from "./Button"
import LinkNav from "./LinkNav"
import Logo from "./Logo"


const Nav = () => {
    const [isOpen, setIsOpen] = React.useState<Boolean>(false)
    return (
        <header className=" static z-[1000] bg-white top-0 left-0 py-[1rem] lg:px-0 px-5 shadow-md ">
            <div className="container mx-auto flex justify-between items-center ">
                <Logo />
                <nav className="hidden xl:flex items-center justify-center gap-10">
                    {menu.map((item, id) => (
                        <LinkNav link={item.link} key={id} title={item.title} />
                    ))}

                </nav>
                <ul className="hidden xl:flex items-center gap-6  ">
                    <Button title="Login" />
                    <Button title="Register" />
                </ul>

                <div className="cursor-pointer text-blue-600 block text-[2rem] xl:hidden" onClick={() => setIsOpen(prev => !prev)}>
                    <MdMenu />
                </div>

            </div>
            <div onClick={() => setIsOpen(false)} className={`w-full xl:hidden backdrop-blur-sm bottom-0 bg-[#ffffff5d] flex flex-col fixed top-0 items-center pb-6 overflow-auto  ${isOpen ? "h-[100vh] fixed" : "h-[0px] absolute"} overflow-hidden  duration-1000  z-[3000] bottom-0 left-0`}>
                <div className="mt-12 flex flex-col items-center justify-center gap-6">
                    <MdClose onClick={() => setIsOpen(false)} className="text-red-600 text-[3rem] cursor-pointer hover:text-[2.8rem] duration-700" />
                    {menu.map((item, id) => (
                        <Link href={item.link} key={id} className="font-semibold text-[1.5rem] text-blue-800 hover:text-[1.4rem] duration-700">{item.title}</Link>
                    ))}
                    <Button title="Login" />
                    <Button title="Register" />
                </div>
            </div>
        </header>
    )
}
export default Nav