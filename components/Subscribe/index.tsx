import Image from 'next/image'
import Button from '../Button'
import { Heading2 } from '../Text'
import SubscribeCard from './SubscribeCard'
const index = () => {
    return (
        <section className='relative overflow-x-hidden'>
            <Image src="/subscribe.png" alt='' fill />
            <div className=" w-full  left-0 bottom-0">
                <div className="container mx-auto relative">
                    <SubscribeCard />
                    <div className="w-full flex justify-between">
                    </div>
                </div>
                <div className="relative flex items-center container mx-auto">
                    <div className='lg:block hidden relative left-[-8rem]  h-[644px] w-[925px] '>
                        <Image src="/Oval.png" alt='' fill />
                    </div>
                    <div className='w-full items-center lg:items-start py-6 lg:py-0 px-5 lg:w-[401px] lg:px-2 flex flex-col gap-5 text-center lg:text-left'>
                        <h2 className='font-extrabold  text-blue-600 text-[2rem] lg:text-[2.3rem]'>Let's build something great together</h2>
                        <p>Collaborate with SMARK to build something great. Our team of expert software developers and digital marketers offers AI-powered solutions that streamline operations, improve efficiency, and drive results. From custom website development to social media management, we have the tools and expertise to help your business succeed. Contact us today to learn more and see how we can work together to achieve your goals.</p>
                        <Button title='Contact Us' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default index