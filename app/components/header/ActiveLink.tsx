'use client'
import { useRouter, usePathname } from 'next/navigation'

const ActiveLink=({children, href}:{children:string; href:string})=>{
    const router=useRouter()
    const pathName = usePathname();

    const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} className={pathName===href?'activeLink':'link'}>
            {children}
        </a>
    )
}

export default ActiveLink

