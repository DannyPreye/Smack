import React from 'react'
import Link from 'next/link'
const Logo = ({ className }: { className?: string }) => {
    return (
        <div className='relative'>
            <Link href='/' className={`font-ultra font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-blue-900  text-[1.2rem] md:text-[2rem] hover:bg-[142px] duration-700 ${className}`}>SMARK</Link>
        </div>)
}

export default Logo
