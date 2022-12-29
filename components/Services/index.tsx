import { services } from "../../utils/menu"
import { Heading2 } from "../Text"
import ServiceCard from "./ServiceCard"

const Services = () => {
    return (
        <section>
            <Heading2 title="Services" className="text-blue-600" />
            <div className="container lg:flex-row flex-col mx-auto flex justify-center gap-16 items-center  lg:items-start py-12 px-5 ">
                {services.map((service, id) => (<ServiceCard key={id} title={service.title} Icon={service.Icon} description={service.description} />))}
            </div>
        </section>
    )
}
export default Services