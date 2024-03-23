

export function ToDos({todos}){
    return <div> 
        {todos.map((todo)=>{
            return <div>
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
                <button>{(todo.completed==true)?"Completed":"Mark as Completed!"}</button>
            </div>
        })}
    </div>
}