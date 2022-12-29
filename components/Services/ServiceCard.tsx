import Image from "next/image"
import { IconType } from "react-icons"


interface Props {
    title: string,
    Icon: IconType,
    description: string,

}

const ServiceCard = ({ title, Icon, description, }: Props) => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <Icon className="text-[5rem] text-blue-600" />
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-blue-600 font-bold ">{title}</h3>
                <p className="text-[14px] text-center md:w-[300px]">{description}</p>
            </div>
        </div>
    )
}
export default ServiceCard