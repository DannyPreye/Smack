import Link from "next/link"

interface Props {
    title: string,
    link?: string,
    className?: string
    onClick?: () => void

}
const Button = ({ title, className, link, onClick }: Props) => {
    return (
        link ? <Link className={`hover:scale-95 duration-300 bg-gradient-to-tr from-blue-400 to-blue-900 bg-blue-700 text-white w-[150px] h-[50px] rounded-[10px] font-nunito font-semibold ${className}`} href={link}>{title}</Link> : <button onClick={onClick} className={`hover:scale-95 duration-300 bg-gradient-to-tr from-blue-400 to-blue-900 bg-blue-700 text-white w-[150px] h-[50px] rounded-[10px] font-nunito font-semibold ${className}`} >{title}</button>
    )
}
export default Button