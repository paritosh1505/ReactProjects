export function Todos({todosvalue}){
    console.log("***********",todosvalue)

    return(
        <div>
           
            {todosvalue.map(function(todo){
                return <div>
                <p>{todo.title}</p>
              <p>{todo.desc}</p>
              <button>{todo.buttonStatus=true?"Completed":"Mark as Complete"}</button>
                </div>
             
                
              
            })}
        </div>
    )
}