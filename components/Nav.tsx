import Link from "next/link"
import { menu } from "../utils/menu"
import LinkNav from "./LinkNav"
import Logo from "./Logo"

const Nav = () => {
    return (
        <header className="py-[1rem] shadow-md static ">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <nav className="flex items-center justify-center gap-10">
                    {menu.map((item, id) => (
                        <LinkNav link={item.link} key={id} title={item.title} />
                    ))}

                </nav>
                <ul className=" flex items-center gap-5 ">
                    <button className="hover:scale-95 duration-300 bg-gradient-to-tr from-blue-400 to-blue-900 bg-blue-700 text-white w-[150px] h-[50px] rounded-[10px] font-nunito font-semibold">Login</button>
                    <button className="hover:scale-95 duration-300 bg-gradient-to-tr from-blue-400 to-blue-900 bg-blue-700 text-white w-[150px] h-[50px] rounded-[10px] font-nunito font-semibold">Register</button>
                </ul>
            </div>
        </header>
    )
}
export default Nav