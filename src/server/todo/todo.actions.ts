"use server"
// TODO: Implement addTodo
import { revalidatePath } from "next/cache"
import fs from "fs/promises"
import path from "path" // Importa revalidatePath
import { TodoSchema } from "@/schemas/todo.schema"

const todosPath = path.join(process.cwd(), "src/data/todos.json")

export const addTodo = async (todo: TodoSchema) => {
  try {

    const data = await fs.readFile(todosPath, "utf-8")
    const todos = JSON.parse(data)
    todos.push(todo)

    await fs.writeFile(todosPath, JSON.stringify(todos, null, 2), "utf-8")

    revalidatePath("/") 
  } catch (error) {
    console.error("Error al agregar el TODO:", error)
    throw error
  }
}
