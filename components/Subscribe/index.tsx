import Image from 'next/image'
import SubscribeCard from './SubscribeCard'
const index = () => {
    return (
        <section className='relative overflow-x-hidden'>
            <Image src="/subscribe.png" alt='' layout='responsive' width={2648} height={1184.97} />
            <div className="absolute w-full h-full left-0 top-0">
                <div className="container mx-auto">
                    <SubscribeCard />
                </div>
            </div>
        </section>
    )
}
export default index