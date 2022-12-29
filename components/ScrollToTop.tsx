import React from 'react'
import { AiFillCaretUp } from 'react-icons/ai'

const ScrollToTop = () => {
    const [showButton, setShowButton] = React.useState<Boolean>(false)
    const [scrollPostion, setScrollPosition] = React.useState(0)

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 200 ? setShowButton(true) : setShowButton(false)
        })
    }, [])

    return (
        <div onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }} title="Scroll to top" className={`${showButton ? "block" : "hidden"} cursor-pointer z-[3000] w-10  h-10 fixed right-5 bottom-8 rounded-full border-[2px] text-white bg-gradient-to-tr from-blue-400 hover:scale-[1.2] to-blue-600 text-[1.5rem] grid place-items-center duration-700`}>
            <AiFillCaretUp />
        </div>
    )
}

export default ScrollToTop
