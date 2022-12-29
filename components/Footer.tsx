import Logo from "./Logo"
import Image from "next/image"
import { menu } from "../utils/menu"
import Link from "next/link"
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconType } from 'react-icons'


const SocialLinks = ({ link, Icon }: { link: string, Icon: IconType }) => (
    <Link href={link} >
        <Icon />
    </Link>
)

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tr  from-transparent  to-blue-600 relative">

            <Image src="/bg.jpg" alt="bg" fill className="grayscale opacity-40" />
            <div className="container mx-auto z-[2000] relative py-5 flex lg:flex-row flex-col justify-between items-center lg:items-start text-white gap-8 lg:gap-0">
                <div className="flex flex-col items-center gap-5">
                    <Logo className="from-blue-500 to-blue-300 drop-shadow-[10]" />
                    <div className="flex gap-3 text-[2rem]">

                        <SocialLinks Icon={AiFillTwitterCircle} link="https://twitter.com/DannyPreye" />
                        <SocialLinks Icon={FaWhatsapp} link="/" />
                        <SocialLinks Icon={FaGithub} link="https://github.com/DannyPreye" />
                        <SocialLinks Icon={FaLinkedin} link="https://linkedin.com/in/olawoyindaniel" />


                    </div>

                </div>
                <div className=" flex-col items-center justify-center flex gap-5">
                    <p className="font-bold text-[1.2rem]">Quick Links</p>
                    <div className="flex flex-col gap-2 items-center">
                        {menu.map((item, id) => (
                            <Link href={item.link} key={id} className="hover:text-[1.2rem] duration-700">{item.title}</Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <p className="font-bold text-[1.2rem]">Address</p>
                    <div className="flex flex-col items-center">
                        <p className="font-bold">+2348144052545</p>
                        <p className="w-[200px] md:w-[300px] px-2 md:px-0 text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum inventore ducimus adipisci odio expedita tempora optio reprehenderit! labore voluptas? Odio quam tempora iste quia illum laudantium eius consequatur dignissimos alias
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-800 relative h-[100px] grid place-items-center">
                <p className="text-white text-[1rem] font-semibold">&copy; {new Date().getFullYear()} Danny Preye </p>
            </div>

        </footer>
    )
}
export default Footer