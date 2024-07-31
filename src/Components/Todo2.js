

import TodoInput from './TodoInput'
// import TodoInput from './TodoInput
import React,{} from 'react'

export default function Todo2(props) {

  const btn = document.getElementsByTagName('button')[0]
  console.log(btn)

    let initialTodoItems=[
        {
          name:"Paneer",
          rupees:"34"
        },
        {
          name:"Ghee",
          rupees:"34"
        },
        {
            name:"Ghee",
            rupees:"34"
          },
          {
            name:"milk",
            rupees:"60"
          }
        ]
        
        
        // const[item,setItem] = useState(initialTodoItems)
  
   
    
    return (
    <>
    <TodoInput/>


        {initialTodoItems.map((item,index) =>(
        <div>
   <div key={index}className='grid grid-cols-6  gap-4 text-center my-4 mx-4'>
        
        <div key={item.rupees} className='col-start-1 col-span-2 border-4 border-solid border-red-700'>{item.name}</div>
    <div key={index.name} className='col-start-3 col-span-2 border-4 border-solid border-red-700'>{item.rupees}</div>
    <div key={index.rupees} className='col-start-5 col-end-8 '>
        <button   className='border-4 border-solid border-red-700 w-40 text-white bg-red-700' type="button">Delete</button>
        </div>
        </div>
        </div>
        ))}

  
    </>
  )
}
