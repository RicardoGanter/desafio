import { z } from "zod"

// TODO: Define the schema for the todo object

export const todoSchema = z.object({})

export type TodoSchema = z.infer<typeof todoSchema>