import {db} from '@services/db'
import {redirect} from "next/navigation";
import bcrypt from 'bcrypt'
import './style.scss'

const RegistrationPage=()=>{


    const handleRegister= async(formData:FormData)=>{
        'use server'
        const hasPassword=await bcrypt.hash((formData.get('password') as string), 5)
        const newUser={
            first_name:(formData.get('first_name') as string)||'',
            last_name:(formData.get('last_name') as string)||'',
            email:(formData.get('email') as string)||'',
            password: hasPassword||''
        }
        console.log(newUser)
        const user=await db.user.create({data:newUser})

        if(user){
            redirect('/auth/signin')
        }
    }


    return <form action={handleRegister} className={'registrationForm'}>
        <p className={'titleRegistration'}>Registration</p>
        <div className={'registrationItem'}>
            <label htmlFor={'first_name'}>First Name</label>
            <input type="text" name="first_name" placeholder="Enter first name" required/>
        </div>
        <div className={'registrationItem'}>
            <label htmlFor={'last_name'}>Last Name</label>
            <input type="text" name="last_name" placeholder="Enter last name" required/>
        </div>
        <div className={'registrationItem'}>
            <label htmlFor={'email'}>Email</label>
            <input type="text" name="email" placeholder="Enter email" required/>
        </div>
        <div className={'registrationItem'}>
            <label htmlFor={'password'}>Password</label>
            <input type="text" name="password" placeholder="Enter password" required/>
        </div>
        <div className={'registrationButton'}>
            <button>Registration</button>
        </div>
    </form>
}

export default RegistrationPage;