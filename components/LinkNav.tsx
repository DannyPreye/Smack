import Link from 'next/link'
import React from 'react'
import { Menu } from '../utils/types'
import { useRouter } from 'next/router'

const LinkNav = ({ title, link }: Menu) => {
    const router = useRouter()
    const check = router.pathname === link
    return (
        <div className='relative'>
            <Link href={link} className={`${check ? "text-[16px]" : "text-[14px]"} font-semibold font-nunito text-blue-500 hover:text-[16px] duration-200`} >
                {title}
            </Link>
            <span className={`${check ? "block" : "hidden"} w-[80%] h-[2px] mx-auto rounded-full bg-blue-600 duration-300`} />
        </div>
    )
}

export default LinkNav
