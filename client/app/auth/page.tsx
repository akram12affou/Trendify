'use client'
import React, {useState, useContext} from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import { AuthContext } from '../Context/authContext'
// import {useCookie} from 'cookie-parser'
function page() {
   const { dispatch ,loading, error} = useContext(AuthContext)
    // const [cookie , _ ] = useCookie(['h'])
    const [register , setRegister] = useState(false);
    const [password , setPassword] = useState('')
    const [username , setUsernameName] = useState('')
    const [email , setEmail] = useState('')
    const auth = () => {
      
      if(register){
        dispatch({type:"LOGIN_START"})
        axios.post('http://localhost:8585/user/register' , 
          {
            username,
            email,
            password
          }
        ).then(res => {
          dispatch({type:"LOGIN_SUCCESS" , payload : res.data})
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
        dispatch({type:"LOGIN_SUCCESS" , payload : res.data})
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
          <button className='primary_color_bg text-white font-semibold py-1 px-2 mt-3 rounded-sm tracking-wider text-lg w-3/4 mx-auto opacity-75'>
            loading...
          </button>
       :
        <button className='primary_color_bg text-white font-semibold py-1 px-2 mt-3 rounded-sm tracking-wider text-lg w-3/4 mx-auto' onClick={auth}>
        {register ?<>Login</> :<>Sign up</>}
       </button>
       }
      
    
       <span className='secondary font-bold tracking-wider mx-auto mt-2'>
        {error}
        </span>
       <p className='mt-3 mx-auto'>
        {register ? <>already have an account ?</>: <>Don't have an account?</>}
        
        {' '}
        
        <span className='font-semibold primary_color tracking-wider cursor-pointer' onClick={() => setRegister(prev => !prev)}>
        {register ? <>Click here to Sign Up</>: <>Click here to Login</>}
            
        </span>
        
       </p>



    </div>
  )
}

export default page