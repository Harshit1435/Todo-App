import React,{useState, useCallback, useEffect} from 'react'

export default function Hooks() {
    const[number, setNumber] = useState(false);
    const[char,setChar] = useState(false);
    const[length,setLength] = useState(5);
    const[password, setPassword]= useState("")

    const numberGenrator = useCallback(
        () => {
            let result = ""
            let str = ""
            if (number) str += "12345676890";
            if (char) str += "!@#$%^&*(){}|][]"

            for (let i = 0; i < length; i++) {
                let char =  Math.floor(Math.random() * str.length +1)

                result += str.charAt(char)
                
            }

            setPassword(result)
        },
        [number,char,length,setPassword]
    )

    useEffect(()=>{
        numberGenrator()
    },[length,char,number,numberGenrator])

  return (
    <div className='rounded bg-red-700 w-full max-w-md text-center  mx-auto  px-4 py-3 '>
<h1 className="text-white text-center">Search Area</h1>
<div className='flex rounded-lg shadow overflow-hidden mb-4'>


<input type="textarea" 
value={password}
placeholder='Type your text'
className='rounded-r-none
 outline-none w-full py-1 px-3'
/>
<button className=' outline-none bg-blue-700 text-white py-0.5 px-3'>
   Copy
</button>
</div>
<div className='flex items-center gap-x-2'>
<div className='flex items-center gap-x-1 text-center'>
    <input 
    
    type="range" 
    min={6}
    max={20}
    id="Range"
    onChange={(e)=>{setLength(e.target.value)}}
    className='' />
    <label htmlFor="
    Kuch Bhi">Length:{length}</label>

</div>
<input type="checkbox" name="" id="" onChange={()=>{setNumber(prev=>!prev)}} defaultChecked={number}/>
<label htmlFor="">Number</label>

<input type="checkbox" name="" id="" defaultChecked={char} onChange={()=>{setChar((prev)=>!prev)}} />
<label htmlFor="">Char</label>


</div>     
</div> 
   
  )
}

