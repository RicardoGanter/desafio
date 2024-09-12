"use client"

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { TodoForm } from "./todo.form"

export const TodoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Añadir Tarea</Button>
      </DialogTrigger>
      <DialogContent>
        <TodoForm />
      </DialogContent>
    </Dialog>
  )
}
