import Image from "next/image"
import Button from "../Button"
const Hero = () => {
    return (
        <section className="bg-gradient-to-bl from-transparent to-blue-600 max-h-fit h-[500px] w-full">
            <div className="container font-nunito mx-auto flex justify-between items-center h-full">
                <div className="flex-col flex  items-center lg:items-start   py-8 ">
                    <h1 className="text-[2rem] lg:text-[3rem] font-bold text-gray-200">Welcome to SMARK</h1>
                    <p className="lg:w-[400px] text-white text-center lg:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid quia perspiciatis rerum porro totam fugiat, reiciendis voluptatum illum quae beatae odio consectetur alias, officiis corrupti ullam iste nulla voluptas.
                    </p>
                    <Button title="Get Started" className="mt-5 rounded-full" />
                </div>

                <div className="lg:block hidden relative h-full w-6/12 ">
                    <Image src='/girl-laptop.png' alt="girl with laptop" fill objectFit="contain" />
                </div>
            </div>
        </section>
    )
}
export default Hero