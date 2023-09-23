import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password,setPassword] = useState("")
  const passRef = useRef(null)

  const PasswordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed)str+="0123456789"
    if(charAllowed)str+="@#$%^&*()_+{}?"
    const x = str.length

    for(let i =0; i<length; i++){

      pass+=str[Math.floor(Math.random() * x )]
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed])

  const Copy = ()=>{
    passRef.current?.select()
    
    window.navigator.clipboard.writeText(Password)
  }

  useEffect(()=>{
    PasswordGenerator()
  },[length,numAllowed ,charAllowed])

  return (
    <>
    
  <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
  <h1 className=' text-2xl text-white text-center  m-3'>Password Generator</h1>
  <div className=' flex  shadow rounded-lg overflow-hidden mb-4'>
  <input type="text" value={Password} className=' outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passRef}/>
  <button className=' outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0' onClick={Copy}>copy</button>

  
  </div>
  <div className=' flex text-sm gap-x-2'>
    <div className=' flex items-center gap-x-1'>
      <input type="range" min={8} max={50} value={length } className=' cursor-pointer' 
      onChange={(e) => {setlength(e.target.value)}}/>
      <label htmlFor="length">Length:{length}</label>
    </div>
    <div className=' flex items-center gap-x-1'>
      <input type="checkbox"   className=' cursor-pointer' 
      onChange={(e) => {setnumAllowed(!numAllowed)}}/>
      <label htmlFor="numAllowed">Numbers </label>
    </div>
    <div className=' flex items-center gap-x-1'>
      <input type="checkbox"   className=' cursor-pointer' 
      onChange={(e) => {setcharAllowed(!charAllowed )}}/>
      <label htmlFor="charAllowed">Characters  </label>
    </div>
  </div>
   
    </div>
    

   
    </>
  )
}

export default App
