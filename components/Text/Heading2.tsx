const Heading2 = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h2 className={`text-[2rem] lg:text-[3rem] font-extrabold text-center mt-8 ${className}`}>{title}</h2>

    )
}
export default Heading2