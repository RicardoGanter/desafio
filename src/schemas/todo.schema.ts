import { z } from "zod"

// TODO: Define the schema for the todo object
export const todoSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  description: z.string().min(1, "La descripción es obligatoria"),
})

export type TodoSchema = z.infer<typeof todoSchema>
