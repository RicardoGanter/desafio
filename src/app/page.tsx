import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { TodoDialog } from "./(sections)/todo.dialog"
import { getTodos } from "@/server/todo/todo.query"
interface Todo {
  id: string
  title: string
  description: string
}
const Page = async () => {
  const todos : Todo[] = await getTodos()
  return (
    <div className="max-w-screen-md mx-auto w-full p-6 space-y-4">
      <TodoDialog /> 
      {todos && todos.map((todo) => (
        <Card key={todo.id}>
          <CardHeader>
            <CardTitle>{todo.title}</CardTitle>
            <CardDescription>{todo.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

export default Page