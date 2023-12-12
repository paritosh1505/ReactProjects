import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //initial states
  const[passwordlength,setpasswordlength] = useState(8)
  const[IntAllowed,setIntAllowed] = useState(false)
  const[charAllowed,setcharAllowed] = useState(false)
  const[password,setpassword] = useState('')
const passwordreference = useRef(null)
const generatepassword=useCallback(()=>{
  let passvalue = ""
  let strvalue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(IntAllowed) strvalue+= "0123456789";
  if(charAllowed) strvalue+= "!@#$%^&*()_";
  for(let i=1;i<passwordlength;i++){
   const randNum =  Math.floor(Math.random()*strvalue.length+1)
    passvalue+=strvalue.charAt(randNum)

  }
  setpassword(passvalue)
},[passwordlength,IntAllowed,charAllowed])//if any of the dependecy change then usecallback will execute. if none of the dependecy change previous instance of the function will be used
//The above function is memoized, meaning it will only be recreated if any of the dependencies change
useEffect(
  generatepassword
  ,[passwordlength,IntAllowed,charAllowed]//The effect function runs whenever the component mounts (if the dependency array is empty) and whenever any value in the dependency array changes.
)
  
const copyPassword = () =>{
  window.navigator.clipboard.writeText(password)
  passwordreference.current?.select()
}
  return (
   
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center mv-3'>Generate Password</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type= "text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref = {passwordreference}
      
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={copyPassword}
      >Copy</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input
        type ="range"
        min={6}
        max = {100}
        value={passwordlength}
        className='cursor-pointer'
        onChange ={(e)=>setpasswordlength(e.target.value)}
        name=""
        id=""
       />
        <label htmlFor='length'>Length: {passwordlength}</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={IntAllowed}
        onChange={()=>{
          setIntAllowed(
            (prev)=> !prev
          )
        }}
        name =""
        id =""
        />
        <label htmlFor='number'>Number</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={charAllowed}
        onChange={()=>{
          setcharAllowed(
            (prev)=> !prev
          )
        }}
        name =""
        id ="characterInput"
        />
        <label htmlFor='charInput'>Characters</label>
      </div>
      
    </div>
     </div>
    </>
  )
}

export default App
