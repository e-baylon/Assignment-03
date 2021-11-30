 import {signInWithEmailAndPassword} from 'firebase/auth'
 import { auth } from '../../../lib/firebase'
 import TextInput from "../../../ui/forms/TextInput"
 import { Button } from "../../../ui/buttons"
import Login from "./styled"
  
 function UserLogin({...props}) {
    //  authentication logic

        function handleClick(){
            console.log(1)
        }
    return (
        <>
        <Login {...props} onClick={handleClick}>    
         <TextInput label="Email"   id="emailAddress" placeholder="janedoe@home.com" {...props}/>
         <TextInput label="Password" type="password" id="emailAddress" placeholder="use a secure password" {...props}/>
         <Button bgcolor="#ed4747" color="white" noBoxShadow {...props}>LOGIN</Button>
        </Login>
        
        </>
    )
}

export default UserLogin