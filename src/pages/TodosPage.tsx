import AddTodoForm from '../features/todos/AddTodoForm';
import TodoList from '../features/todos/TodoList';

export default function TodosPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Todos</h1>
            <AddTodoForm />
            <TodoList />
        </div>
    );
}
