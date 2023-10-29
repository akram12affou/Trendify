'use client'
import React, {useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/authContext'
import {useCookies} from 'react-cookie'
import {useRouter} from 'next/navigation'
function page() {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
   const router = useRouter()
   const { dispatch,loading, error} = useContext<any>(AuthContext);
    const [_, setCookie] = useCookies<string>(['accesToken']);
    const [register , setRegister] = useState<boolean>(false);
    const [password , setPassword] = useState<string>('');
    const [username , setUsernameName] = useState<string>('');
    const [email , setEmail] = useState<string>('');
    const auth = () => {
      if(register){
        if(username.length < 6){
          dispatch({type:"LOGIN_FAILED" , payload :'name should atleast contain 6 characters'})
          return;
        }
        if(!regex.test(password)){
          dispatch({type:"LOGIN_FAILED" , payload :'password should atleast contain 6 characters'})
          return;
        }
        dispatch({type:"LOGIN_START"})
        axios.post('http://localhost:8585/user/register' , 
          {
            username,
            email,
            password
          }
        ).then(res => {
          dispatch({type:"LOGIN_SUCCESS" , payload : res.data.newUser})
          setCookie("accesToken" ,res.data.cookie)
          router.push('/');
        }).catch(err=> {
          console.log(err);
          dispatch({type:"LOGIN_FAILED" , payload : err.response.data.message})
        })
      }else{
        dispatch({type:"LOGIN_START"})
        axios.post('http://localhost:8585/user/login' , 
        {
          email,
          password
        }
      ).then(res => {
        dispatch({type:"LOGIN_SUCCESS" , payload : res.data.user})
        setCookie("accesToken" ,res.data.cookie)
        router.push('/');
      }).catch(err=> {
        dispatch({type:"LOGIN_FAILED" , payload : err.response.data.message})
      })
      }
    }
    
  return (
    <div className='flex flex-col w-3/4 sm:w-1/2 max-w-xl	  justify-center mt-8 gap-1  shadow_product mx-auto p-4'>
        {register &&
        <>
        <label htmlFor="" className='uppercase mt-3'>name :</label>
        <input type="text" placeholder="name..." className='p-2.5 outline-none border-1 border-teal-600 placeholder:font-serif' value={username} onChange={(e) => setUsernameName(e.target.value)}/>
       </>
        }
       <label htmlFor="" className='uppercase mt-3'>email :</label>
       <input type="email" placeholder="exemple@gmail.com"  className='p-2.5 outline-none border-1 border-teal-600 placeholder:font-serif'  value={email}  onChange={(e) => setEmail(e.target.value)}/>
       <label htmlFor="" className='uppercase mt-3'>password :</label>
       <input type="password"  placeholder="your password ..." className='p-2.5 outline-none border-1 border-teal-600 placeholder:font-serif' value={password}  onChange={(e) => setPassword(e.target.value)}/>
       {loading ? 
          <button className='primary_color_bg text-white font-semibold py-1 px-2 mt-3 rounded-sm tracking-wider text-lg w-3/4 mx-auto opacity-75 cursor-progress'>
            loading...
          </button>
       :
        <button className='primary_color_bg text-white font-semibold py-1 px-2 mt-3 rounded-sm tracking-wider text-lg w-3/4 mx-auto' onClick={auth}>
        {register ?<>Login</> :<>Sign up</>}
       </button>
       }
       {!register && <button className="secondary_color_bg text-white font-semibold py-1 px-2 mt-3 rounded-sm tracking-wider text-lg w-3/4 mx-auto">Login as a guest</button> }

       <span className='secondary scale-y-95  tracking-wide mx-auto mt-2'>
        {error}
        </span>
       <p className='mt-3 mx-auto'>
        {register ? <>already have an account ? </>: <> Don't have an account?</>}
        <span className='font-semibold primary_color tracking-wider cursor-pointer' onClick={() => setRegister(prev => !prev)}>
        {register ? <>Click here to Sign Up </>: <> Click here to Login</>}   
        </span>    
       </p>
      
    </div>
  )
}

export default page


