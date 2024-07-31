import React,{useCallback,useState,useEffect} from 'react'


export default function Project1() {
    const[length, setLength] = useState(8);
    const[number, setNumber] = useState(false);
    const[char, setChar] = useState(false)
    const[password, setPassword] = useState("")
  
    const passwordGenrator = useCallback(()=>{
      let pass = ""
      let str = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm"
      if (number) str += "1234567890"
      if (char) str += "!@#$%^&*(){}<~`"
  
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
  
        pass += str.charAt(char)
        
      }
  
      setPassword(pass)
  
    },[length,number,char,setPassword])
  
    useEffect(()=>{
      passwordGenrator()
    },[char, number, length, passwordGenrator])  // This is the dependencey
  
  return (
    <div>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-7 my-4 py-3 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">Password Genrator</h1>
        
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password} 
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly/>
        <button
        className="outline-none bg-blue-600 text-white py-0.5 px-3 shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min={6}
          max={20}
          value={length}
          className="cursor-pointer"
          onChange={(e) =>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input 
          
          type="checkbox" 
          defaultChecked={number}
          id="numberInput"
          onChange={() =>{setNumber((prev) => !prev);
          }}
          />
          <label>Number</label>

        </div>

        <div className="flex items-center gap-x-1">
          <input 
          
          type="checkbox" 
          defaultChecked={char}
          id="numberInput"
          onChange={() =>{setChar((prev) => !prev);
          }}
          />
          <label>Char</label>

        </div>

      </div>
      </div>


    </div>
  )
}
