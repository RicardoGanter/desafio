
# Desafío Mactec

## Descripción

En este desafío tendrán que crear una TODO list. La aplicación debe tener:

- Un [Dialog](https://ui.shadcn.com/docs/components/dialog) que permita agregar una nueva tarea. Cada tarea tendrá un título y una descripción.
- Un listado de tareas en [Tarjetas](https://ui.shadcn.com/docs/components/card) que muestre el título y la descripción de cada tarea.

## Instrucciones

- Todos los componentes y librerías necesarias para construir esta aplicación estan previamente instalados. Para esta tarea **no se permite instalar ninguna librería adicional**. Se recomienda revisar la documentación de [shadcn/ui](https://ui.shadcn.com/docs) para información de como utilizar sus componentes.
- La lógica para mantener el estado de los TODOs se hará utilizando los `Server Actions` de Next.js 13 en adelante, no se debe utilizar `useState` o `useReducer` para mantener el estado de los TODOs, ni una librería de estados como `zustand` o `redux`. Recomiendo revisar la documentación de [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) y [RevalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) ambos necesarios para completar esta tarea.
- Para simular el uso de una base de datos, se utilizará el archivo `src/data/todos.json`, este archivo debe ser modificado cada vez que se agregue una nueva tarea.
- El [Dialog](https://ui.shadcn.com/docs/components/dialog) debe contener un [formulario](https://ui.shadcn.com/docs/components/form) para ingresar el título y la descripción de la tarea. Para esto, se debe utilizá react-hook-form y zod para su validación. Se debe crear su esquema respectivo dentro de la carpeta `src/schemas` y utilizarlo en el formulario.
- Al agregar un nuevo TODO, se debe ejecutar un `Server Action` que modifique listado de TODOs y revalide el `cache` de la página.

## Requisitos adicionales

- El proyecto usa Typescript, no se permite utilizar Javascript.
- Se debe utilizar ESLint y Prettier para mantener un código limpio y ordenado. Se incluye un archivo `.eslintrc.js` con la configuración necesaria.