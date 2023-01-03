import Button from "../Button"


const SubscribeCard = () => {
    return (
        <div className=" mt-12 grid place-items-center gap-5 lg:grid-cols-2">
            <div className="lg:w-[311px] flex flex-col gap-3">
                <h3 className="text-xl font-bold text-blue-600 ">
                    Stay in the loop with SMARK by subscribing to our newsletter.
                </h3>
                <p className="">Stay up-to-date on the latest industry trends, product updates, and special offers by subscribing to our newsletter. </p>
            </div>
            <div className="flex w-full max-w-[523px] mx-auto h-[56px] bg-white border-[2px]  shadow-md rounded-full overflow-hidden ">
                <input type="text" className="border-none outline-none w-[80%] px-4 bg-transparent " />
                <Button title="Subcribe" className="h-full" />
            </div>
        </div>
    )
}
export default SubscribeCard