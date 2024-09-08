"use client"
import { todoSchema, TodoSchema } from "@/schemas/todo.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { addTodo } from "@/server/todo/todo.actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export const TodoForm = () => {

  const form = useForm<TodoSchema>({
    resolver: zodResolver(todoSchema),
    defaultValues: {},
  })

  const onSubmit = async (values: TodoSchema) => {
    try {
      await addTodo()
      toast.success("TODO guardado correctamente")
      form.reset()
    } catch (error) {
      toast.error("Ocurrió un error al guardar el TODO")
    }
  }

  return (
    <div>This is my form component</div>
  )
}