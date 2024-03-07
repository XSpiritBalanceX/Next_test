'use client'
import {signIn} from "next-auth/react";
import {useState} from "react";
import {useRouter} from 'next/navigation'
import './style.scss'


const SignInPage=()=>{
    const router=useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSignIn=async (e:any)=>{
        e.preventDefault()
        const response=await signIn('credentials',{email:email, password:password, redirect:false})
       if(response?.ok){
           router.push('/')
       }else {
           setError('The user does not exist or check the details')
       }

    }
    const handleEmailPassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.currentTarget.name==='email'&&setEmail(e.currentTarget.value)
        e.currentTarget.name==='password'&&setPassword(e.currentTarget.value)
    }

    return <form onSubmit={handleSignIn} className={'formLogin'}>
        <p className={'titleLogin'}>Sign in</p>
        <div className={'itemInLogin'}>
            <label htmlFor={'email'}>Email address</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailPassword}/>
        </div>
        <div className={'itemInLogin'}>
            <label htmlFor={'password'}>Password</label>
            <input type="string" id="password" name="password" value={password} onChange={handleEmailPassword}/>
        </div>
        <div>{error}</div>
        <div className={'submitLogin'}>
            <button type="submit">Sign in </button>
        </div>

    </form>
}

export default SignInPage




