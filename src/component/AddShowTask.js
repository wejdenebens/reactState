import React,{useState} from 'react';

      const AddShowTask = () => {

      const [todo,setTodo] = useState([{id:1,task:'eat'}])
      const [inputData,setInputData] = useState('')

      return( 
        <>
        <ul>
            {
                todo.map(item =>
                <> 
                    <li>{item.task}</li>
                    <button onClick={()=>{ setTodo([{id:item.id,task:inputData}])
                    setInputData(item.task)
                }}>Edit</button>
                    <button onClick={()=>{ setTodo([{id:0,task:""}])
                    
                    }}>Delete</button> 
                 </>)
                
            }
        </ul>
        
         <input type='text' onChange={(e)=>{setInputData(e.target.value)}} value={inputData}></input>  
         <button onClick={()=>{ setTodo([...todo,{id:todo.length,task:inputData}])
            setInputData('')
            }}>ADD</button>
             
        </>
             )
           
 }

export default AddShowTask;