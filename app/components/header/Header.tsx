'use client'
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import './style.scss'

const Header=()=>{

    return <div className={'headerContainer'}>
        <ActiveLink href={'/'}>Home</ActiveLink>
        <ActiveLink href={'/catalog'}>Catalog</ActiveLink>
        <ActiveLink href={'/aboutus'}>About Us</ActiveLink>
    </div>
}

export default Header