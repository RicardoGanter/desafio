"use server"
// TODO: Implement getTodos
import fs from "fs/promises"
import path from "path" 

const todosPath = path.join(process.cwd(), "src/data/todos.json")

export const getTodos = async () => {
  try {
    const data = await fs.readFile(todosPath, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error al leer los TODOs:", error)
    return []
  }
}
