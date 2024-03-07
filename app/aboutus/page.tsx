'use client'
import {useSession} from "next-auth/react";

const AboutUsPage=()=>{
    const {data:session, status} = useSession();
    console.log(session, status)

    return <div>
        <h1>About Us Page</h1>
    </div>
}

export default AboutUsPage


