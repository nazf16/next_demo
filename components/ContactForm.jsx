
import { useState } from "react"




 function FormGroup({label, type, placeholder, value, onInput}){
    return (
        <div className='flex flex-col space-y-2'>
            <label>{label}</label>
            <input onInput={onInput} type={type} placeholder={placeholder} value={value} className="border border-gray-600 text-gray-800 p-2 outline-none" />
        </div>
    )

}

export default function ContactForm(){
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e)
    {
        e.preventDefault()
        console.log("full name", fullname)
        console.log("email", email)
        console.log("message", message)
   
    }


    return (
        <form onSubmit={handleSubmit} className='m-3/4 mx-auto flex flex-col space-y-3'>
            <FormGroup onInput={(e)=>setFullname(e.target.value)} label="full name" type="text" placeholder="your name" value={fullname}/>
            <FormGroup onInput={(e)=>setEmail(e.target.value)}label="email" type="email" placeholder="your email" value={email}/>
            <FormGroup onInput={(e)=>setMessage(e.target.value)}label="message" type="text" placeholder="your messsage" value={message}/>

            <div className='text-center'>
                <button className='bg-purple-500 text-gray-50 px-6 py-2 rounded '>Send Message</button>
            </div>
        </form>
    )
}

 