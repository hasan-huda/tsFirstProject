import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response=>{
  const todo=response.data as Todo;
  const id=todo.id;
  const completed=todo.completed;
  const title=todo.title;

  console.log(`id: ${id} \n title: ${title} \n completed: ${completed}`)
});

