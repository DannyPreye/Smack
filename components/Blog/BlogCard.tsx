import Image from "next/image"
import { Blog } from "../../utils/types"
import Button from "../Button"


const BlogCard = ({ title, description, created_at, featuredImage }: Blog) => {
    return (
        <div className="max-w-[380px] w-full flex-shrink-0 min-h-fit h-fit rounded-[20px]  overflow-hidden   shadow-md">
            <div className="h-[250px] w-full relative bg-blue-400">
                <Image src={featuredImage} alt={title} fill objectFit="contain" />
            </div>
            <div className="h-[50%] py-4 px-4 bg-gradient-to-tr from-blue-600 to-blue-400 flex flex-col gap-4 relative">
                <Image src="/bg1.jpg" alt="" fill className="grayscale opacity-25" />
                <Image src="/blog_design.png" alt="" fill objectPosition="left" className="grayscale opacity-50" />
                <div className="relative">
                    <h2 className="text-[1.4rem] font-extrabold text-white">{title}</h2>
                    <p className="text-white font-semibold">{created_at.toDateString()}</p>
                </div>
                <p className="text-[14px] text-white relative ">{description.slice(0, 100)}...</p>

                <Button title="Read More" />
            </div>
        </div>
    )
}
export default BlogCard