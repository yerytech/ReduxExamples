import { useState } from "react";
import { useGetTodosByIdQuery } from "./store/apis/todosApi";



export const TodoApp = () => {
 
    const [todoId, setTodoId] = useState(1);
    // const {data:todos} = useGetTodosQuery();
    const { data:todo,isLoading } = useGetTodosByIdQuery(todoId);
 
    const nextTodo = () => { setTodoId(todoId + 1); }
   
    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }
 

  return (
      <>
          <h1>Todo - RTK Query</h1>
          <hr />

          <h4>IsLoading:{ isLoading?'True':'False' }</h4>
          <hr />
          <h4>{JSON.stringify(todo)}</h4>
          
          {/* <ul>{todos?.map(todo => (
              <li key={todo.title}>
                  <strong>{todo.completed?'Done ':'Pending ' }</strong>
                  {todo.title}</li>
          )) }</ul> */}
          <button onClick={nextTodo}>
              Next Todo
          </button>
          <button onClick={prevTodo}>
             Prev  Todo
          </button>
      </>
  )
}


