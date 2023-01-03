import Image from "next/image"
import Button from "../Button"
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <section className="bg-gradient-to-bl from-transparent to-blue-600 max-h-fit h-[500px] w-full relative">
            <Image src='/bg.jpg' alt="" fill className="grayscale opacity-[0.5]" />
            <div className="container font-nunito mx-auto flex justify-between items-center h-full">
                <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ duration: 2, bounce: 0.3 }} className="flex-col z-[100] flex  items-center lg:items-start   py-8 ">
                    <h1 className="text-[2rem] lg:text-[3rem] font-extrabold text-gray-200 lg:w-[620px] lg:text-left text-center">Revolutionize Your Online Presence with AI-Powered Tools</h1>
                    <p className="lg:w-[400px] text-white text-center lg:text-left px-4 lg:px-0 ">
                        Welcome to SMARK, where we help businesses transform their online presence through cutting-edge AI-powered solutions. Our team of expert software developers and digital marketers are dedicated to helping companies of all sizes succeed online.
                    </p>
                    <Button title="Get Started" className="mt-5 rounded-full" />
                </motion.div>
                <div className="lg:block hidden relative h-full w-6/12 ">
                    <Image src="/Group.png" alt="" fill objectFit="contain" objectPosition="right" />
                    <Image src='/girl-laptop.png' alt="girl with laptop" fill objectFit="contain" />
                </div>
            </div>
        </section>
    )
}
export default Hero