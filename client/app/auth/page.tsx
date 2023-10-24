'use client'
import React, {useState} from 'react'
import axios from 'axios'
function page() {
    const [error , setError] = useState('')
    const [register , setRegister] = useState(false);
    const [password , setPassword] = useState('')
    const [username , setUsernameName] = useState('')
    const [email , setEmail] = useState('')
    const auth = () => {
      setError('')
      if(register){
        axios.post('http://localhost:8888/user/register' , 
          {
            username,
            email,
            password
          }
        ).then(res => {
          console.log(res)
        }).catch(err=> {
          setError(err.response.data.message)
        })
      }else{
        // email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
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
       <button className='primary_color_bg text-white font-semibold py-1 px-2 mt-3 rounded-sm tracking-wider text-lg w-3/4 mx-auto' onClick={auth}>
        {register ?<>Login</> :<>Sign up</>}
       </button>
    
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