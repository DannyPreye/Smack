import Image from "next/image"
import Button from "../Button"
const Hero = () => {
    return (
        <section className="bg-gradient-to-bl from-transparent to-blue-600 max-h-fit h-[500px] w-full relative">
            <Image src='/bg.jpg' alt="" fill className="grayscale opacity-[0.5]" />
            <div className="container font-nunito mx-auto flex justify-between items-center h-full">
                <div className="flex-col z-[100] flex  items-center lg:items-start   py-8 ">
                    <h1 className="text-[2rem] lg:text-[3rem] font-extrabold text-gray-200 lg:text-left text-center">Welcome to SMARK</h1>
                    <p className="lg:w-[400px] text-white text-center lg:text-left px-4 lg:px-0 ">
                        At SMARK, we are dedicated to helping businesses leverage the power of AI to drive efficiency and achieve success. Our comprehensive suite of AI products and services is designed to deliver results and give businesses a competitive edge. Don't miss out on the benefits of AI – try SMARK today!
                    </p>
                    <Button title="Get Started" className="mt-5 rounded-full" />
                </div>

                <div className="lg:block hidden relative h-full w-6/12 ">
                    <Image src="/Group.png" alt="" fill objectFit="contain" objectPosition="right" />
                    <Image src='/girl-laptop.png' alt="girl with laptop" fill objectFit="contain" />
                </div>
            </div>
        </section>
    )
}
export default Hero