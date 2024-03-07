'use client'

const ErrorPage=({reset}:{reset:()=>void})=>{
    return <div>
        Oops, some error occurred.
        <button onClick={reset}>Reset</button>
    </div>
}

export default ErrorPage