import Button from "../Button"
import { Heading2 } from "../Text"

const SubscribeCard = () => {
    return (
        <div className="flex justify-center lg:gap-8 gap-4 lg:text-left text-center px-6 lg:px-0 items-end lg:flex-row flex-col w-full mt-12">
            <div className="lg:w-[311px] flex flex-col gap-3">
                <h3 className="text-xl font-bold text-blue-600 ">
                    Stay in the loop with SMARK by subscribing to our newsletter.
                </h3>
                <p className="">Stay up-to-date on the latest industry trends, product updates, and special offers by subscribing to our newsletter. </p>
            </div>
            <div className="flex w-full max-w-[523px] h-[56px] border-[2px]  shadow-md rounded-full overflow-hidden ">
                <input type="text" className="border-none outline-none w-[80%] px-4 " />
                <Button title="Subcribe" className="h-full" />
            </div>
        </div>
    )
}
export default SubscribeCard