import React from 'react'
import dynamic from 'next/dist/shared/lib/dynamic';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { useRouter } from 'next/router';

import Button from '../../components/Button';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
})

const Blog = () => {
    const [content, setContent] = React.useState("")
    const [title, setTitle] = React.useState<string>("")
    const route = useRouter()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await axios.post(`/api/blog`, {
            content,
            title,
        })

        res.status === 200 && route.push('/blog')
    }

    return (
        <form onSubmit={onSubmit} className='container mx-auto  py-8 px-5 lg:px-0 font-nunito'>
            <div className='flex items-center h-[56px] border-[1px] rounded-full  overflow-hidden my-6'>
                <label htmlFor="title" className='text-[1.2rem] font-semibold px-2 h-full bg-blue-600 grid place-items-center text-white '>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" id='title' className='flex-1 h-full border-none outline-none px-4' required />
            </div>
            <ReactQuill theme='snow' modules={{
                toolbar: [
                    [{ 'header': [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                    ['link', 'image'],
                    ['clean']
                ]
            }}
                value={content}
                onChange={setContent}

                className="min-h-[70vh] h-[800px] "></ReactQuill>
            <div className='flex justify-end'>
                <Button type='submit' title='Publish' className='mt-12' />

            </div>
        </form>
    )
}

export default Blog