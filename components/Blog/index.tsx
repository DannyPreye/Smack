import Image from "next/image"
import { testBlog } from "../../utils/menu"
import Button from "../Button"
import { Heading2 } from "../Text"
import BlogCard from "./BlogCard"
import { BlogType } from "../../utils/types"

const Blog = ({ blog }: { blog: BlogType[] }) => {
    return (
        <section className=" bg-gradient-to-tr py-10 px-5 relative flex flex-col items-center ">
            <Heading2 title="Our Blog" className="text-blue-600" />
            <div className=" container mx-auto place-items-center mt-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 overflow-x-auto ">
                {blog?.map((card, id) => (
                    <BlogCard key={id} title={card.title} featuredImage={card?.featuredImage} content={card.content} created_At={card.created_At} />
                ))}
            </div>
            <Button title="Show More" link="/blog" className="rounded-full mx-auto mt-8" />
        </section>
    )
}
export default Blog