import Image from 'next/image'
import {useRouter} from 'next/router'
import {auth} from '../../../../lib/firebase';

import {useAuth} from '../../../../lib/hooks/useAuth';
import {GoogleAuthProvider, signInWithPopup} from '@firebase/auth';
import { ProviderButton } from "../../../../ui/buttons";
import google from "./google.png";
import {useState} from 'react'

function GoogleProvider({ children,  ...props }) {
  const router = useRouter()
      const user = useAuth()
      const [isValidUser, setIsValidUser] = useState(null)

      const provider = new GoogleAuthProvider()

    async function requestLogin(){
        setIsValidUser(await signInWithPopup(auth, provider))
    }

      function handleClick(){
        //sign in with google
        requestLogin()
      }

      if(isValidUser){
        router.push('/todo')
      }

  return (
    <ProviderButton onClick={handleClick} {...props} >
      <div>
        <Image
          src={google}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
