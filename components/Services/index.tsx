import { services } from "../../utils/menu"
import ServiceCard from "./ServiceCard"

const Services = () => {
    return (
        <section>
            <h2 className="text-[3rem] font-extrabold text-blue-600 text-center mt-8">Services</h2>
            <div className="container lg:flex-row flex-col mx-auto flex justify-center gap-16  items-start py-12 px-5 ">
                {services.map((service, id) => (<ServiceCard key={id} title={service.title} Icon={service.Icon} description={service.description} />))}
            </div>
        </section>
    )
}
export default Services