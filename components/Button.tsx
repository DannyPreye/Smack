import Link from "next/link"

interface Props {
    title: string,
    link?: string,
    className?: string
    onClick?: () => void
    type?: "button" | "submit" | "reset"

}
const Button = ({ title, className, link, onClick, type }: Props) => {
    return (
        link ? <Link className={`hover:scale-95 duration-300 bg-gradient-to-tr group from-blue-400 to-blue-900 bg-blue-700 text-white w-[150px] flex justify-center items-center h-[50px] rounded-full font-nunito font-semibold ${className} relative overflow-hidden`} href={link}>< span className="w-[0px] z-[-10] h-full absolute top-0 left-0 group-hover:w-full bg-blue-700 duration-700 " />
            <span className="z-[100] text-white">{title}</span>

        </Link> : <button type={type || "button"} onClick={onClick} className={`rounded-full hover:scale-95 duration-300 bg-gradient-to-tr group from-blue-400 to-blue-900 bg-blue-700 text-white w-[150px] h-[50px]  font-nunito font-semibold ${className} relative overflow-hidden `} >
            < span className="w-[0px] z-[-10] h-full absolute top-0 left-0 group-hover:w-full bg-blue-700 duration-700 " />
            <span className="z-[100] text-white">{title}</span>
        </button>
    )
}
export default Button