'use client'
import {getSession, SessionProvider, useSession} from 'next-auth/react'
import {AppProps} from "next/app";
import SigninPage from "@app/auth/signin/page";
import {useEffect} from "react";

const App =({Component, pageProps}:AppProps)=>{
    const {data:session,status}=useSession()
//console.log("SESSION",session)

    useEffect(() => {
        const loadSession = async () => {
            // Загрузка сеанса
            await getSession();
        };

        loadSession();
    }, []);
    if(status==='loading'){
        return <div>Loading...</div>
    }
    if(!session){
        return <SigninPage/>
    }

    return (
        <SessionProvider session={session}>
            <Component {...pageProps}/>
        </SessionProvider>
    )
}

export default App