interface todoItemsProps {
    id: number;
    title: string;
    status: STATUS;
    completedOn?: Date;
}

enum STATUS {
    TODO = 'todo',
    INPROGRESS = 'progress',
    DONE = 'done',
}

const todoItems:todoItemsProps[] = [
    { id: 1, title: "Learn HTML", status: STATUS.DONE, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: STATUS.INPROGRESS },
    { id: 3, title: "Write the best app in the world", status: STATUS.TODO},
]

function addTodoItem(todo:string):todoItemsProps {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: STATUS.TODO,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id: number}>(items : T[]):number{
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))