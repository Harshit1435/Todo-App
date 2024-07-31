import {React, useState} from 'react';
export default function Todo({onNewItem}){

    const[todoName, setTodoName] = useState()

    const[todoDate, setTodoDate] = useState()

    const handleChangeName = (event)=>{
        setTodoName(event.target.value)
    }
    const handleChangeDate=(event)=>{
        setTodoDate(event.target.value)
    }
    return(
        <>
        <h1 className='text-center text-white text-4xl'>Todo App</h1>
        <div className='text-center'>
        <div className='grid grid-cols-3 m-8'>

        <div>
            <input type="text" placeholder='enter Todo Here' onChange={handleChangeName} />
        </div>

        <div>
            <input type="date" onChange={handleChangeDate}/>
        </div>

        <div>
           <button className='text-white bg-green-700 min-w-8' type="button" onClick={()=> onNewItem(todoName,todoDate)}>Save</button>
        </div>
            </div>
        </div>
        </>
    )
}