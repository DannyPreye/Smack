import { Hero, Services, Blog, About, Subscribe } from '../components'
import axios from 'axios'
import { BlogType } from '..//utils/types'

interface Props {
    blog: BlogType[]
}

const Home = ({ blog }: Props) => {
    return (
        <>
            <main className='font-nunito' >
                <Hero />
                <Services />
                <About />
                <Blog blog={blog} />
                <Subscribe />
            </main>
        </>
    )
}


export const getServerSideProps = async () => {
    const { data } = await axios.get(`${process.env.BASE_URL}/api/blog?page=6`)
    return {
        props: {
            blog: data.data
        }
    }
}



export default Home;

