import React from 'react'
import Image from "next/image"
import { BlogType } from "../../utils/types"
import Button from "../Button"


const BlogCard = ({ title, content, created_At, featuredImage }: BlogType) => {
    const [text, setText] = React.useState("")

    React.useEffect(() => {
        const div = document.createElement('div');
        div.innerHTML = content
        setText(div.textContent!)
    }, [])
    return (
        <div className="max-w-[380px] h-[500px] w-full flex-shrink-0 min-h-fit  rounded-[20px]  overflow-hidden   shadow-md">
            <div className="h-[250px] w-full relative bg-blue-400">
                {featuredImage && <Image src={featuredImage} alt={title} fill objectFit="contain" />}
            </div>
            <div className="h-[50%] py-4 px-4 bg-gradient-to-tr from-blue-600 to-blue-400 flex flex-col gap-4 relative">
                <Image src="/bg1.jpg" alt="" fill className="grayscale opacity-25" />
                <Image src="/blog_design.png" alt="" fill objectPosition="left" className="grayscale opacity-50" />
                <div className="relative">
                    <h2 className="text-[1.2rem] font-extrabold text-white">{title}</h2>
                    <p className="text-white font-semibold">{created_At && new Date(created_At).toDateString()}</p>
                </div>
                <p className="text-[14px] text-white relative ">{text.slice(0, 100)}...</p>
                <Button title="Read More" />
            </div>
        </div>
    )
}
export default BlogCard