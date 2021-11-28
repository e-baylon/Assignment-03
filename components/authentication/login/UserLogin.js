import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'next/router'


import { auth } from '../../../lib/firebase' 
import TextInput from "../../../ui/forms/TextInput"
import { Button } from "../../../ui/buttons"
import Login from "./styled"
  
 function UserLogin({...props}) {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const router = useRouter()
    //  authentication logic

        async function handleClick(e){
            e.preventDefault();
            const isUser = await signInWithEmailAndPassword(auth, email, password)
            console.log(isUser)

            if(isUser){
                router.push('/todo')
            }
  
        }
    return (
        <>
        <Login {...props} onSubmit={(e)=>handleClick(e)}>    
         <TextInput label="Email" onChange={(e)=>setEmail(e.currentTarget.value)} id="emailAddress" placeholder="janedoe@home.com" {...props}/>
         <TextInput label="Password" onChange={(e)=>setPassword(e.currentTarget.value)} id="emailAddress" type="password" id="emailAddress" placeholder="use a secure password" {...props}/>
         <Button bgcolor="#ed4747" color="white" noBoxShadow {...props}>LOGIN</Button>
        </Login>
        
        </>
    )
}

export default UserLogin