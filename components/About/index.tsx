import Image from 'next/image'
import { Heading2 } from "../Text"

const index = () => {
    return (
        <section className="bg-gradient-to-tr from-blue-400 to-blue-600  ">
            <div className="container mx-auto py-6">
                <Heading2 title="About Us" className="text-white" />
                <div className="flex flex-col gap-4 text-center mt-5 text-white">
                    <p>
                        At SMARK, we are passionate about helping businesses succeed online. Our team of expert software developers and digital marketers are dedicated to delivering cutting-edge AI-powered solutions that streamline operations, improve efficiency, and drive results.
                    </p>
                    <p>
                        Our comprehensive suite of services includes custom website design and development, AI-assisted content writing and grammar correction, Twitter profile management with AI-powered tweet scheduling, and full-service digital marketing strategy and execution. We work with businesses of all sizes across a variety of industries to help them create a professional and effective online presence.
                    </p>
                    <p>


                        We are committed to delivering the highest level of service and value to our clients. Our team is constantly learning and staying up-to-date on the latest technologies and trends to ensure that we are always delivering the best solutions possible.
                    </p>
                </div>
            </div>

        </section>
    )
}
export default index