import styled from 'styled-components';
import { IoPersonCircleSharp } from "react-icons/io5";
import {useAuth} from "../../../lib/hooks/useAuth";
import {signOut} from "@firebase/auth";
import {auth} from '../../../lib/firebase';
import {useRouter, Router} from 'next/router';

const LoginStatus = styled.figure`
   display:flex;
   gap:0.5rem;
   justify-content: center;
   align-items: center;
   line-height:0.65rem;
   vertical-align: center;
   box-shadow: 0 0 2px 1px rgba(0,0,0,0.25);
   padding:0.125rem 0.5rem;
   border-radius:3px;
   cursor: pointer;
   background-color: ${(props) => props.bgcolor || "transparent"};
 
   width:120px;
  
    img{
        border-radius:50%;
    }
 
   figcaption{
       text-align:center;
       font-size: 9px;
     
   
       p:first-child{
           font-weight:600;
         
       }
       p:last-child{
           font-weight:8px;
       }
    }
   
` 

 function UserLoginStatus({size, color, status, ...props}) {
      const user = useAuth()

      function handleClick(){
          //sign the user out
          signOut(auth)
          .then(()=>{
            router.push('/')
          })
      }

      if(user){
        return( <LoginStatus bgcolor="#d6fecd" onClick={handleClick}>
            <IoPersonCircleSharp size={size || "1.75rem"}/>  
           <figcaption>
               <p>Status</p>
               <p>logout</p>
           </figcaption>
           </LoginStatus>);
      }

      return( <LoginStatus>
            <IoPersonCircleSharp size={size || "1.75rem"}/>  
           <figcaption>
               <p>Status</p>
               <p>please login</p>
           </figcaption>
           </LoginStatus>
           );
      }
   
     

export default UserLoginStatus