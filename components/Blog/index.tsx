import Image from "next/image"
import { testBlog } from "../../utils/menu"
import Button from "../Button"
import BlogCard from "./BlogCard"

const Blog = () => {
    return (
        <section className=" bg-gradient-to-tr py-10 px-5 relative flex flex-col items-center ">
            <h2 className="text-[3rem] font-extrabold text-blue-600 text-center mb-6">Our Blog</h2>

            <div className=" container mx-auto place-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 overflow-x-auto ">
                {testBlog.map((card, id) => (
                    <BlogCard key={id} title={card.title} featuredImage={card.featuredImage} description={card.description} created_at={card.created_at} />
                ))}
            </div>
            <Button title="Show More" link="/blog" className="rounded-full mx-auto mt-8" />
        </section>
    )
}
export default Blog