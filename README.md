# Project for SARAL’s Frontend Engineer

---

Hey there! 👋 

Thanks for your interest in working with us! The final step in our hiring process is a virtual code interview.  Please send us 1 video link, answering the questions and explaining your code structure.

**Somethings to keep in mind:**

- Please be sure your audio is clear and your camera is on when you answer the questions. You will need to create a second video that records your screen for the code share.
- Contact us if you have issues with the assignment.

# Tech Stack 
- React
- Typescript
- Material-Ui
- Framer Motion
- Kanban Application
- React-error-boundaries
- Axios

# The Assignment

You have to create a task management system when you can create a todo, edit a todo, delete a todo and mark a todo as complete.

Below are some public apis you have to use, more details in docs here [`https://dummyjson.com/docs/todos`](https://dummyjson.com/docs/todos)

```
// Get all todos for a user
POST : GET
URL : https://dummyjson.com/todos/user/<user id>

// Add a todo

URL : https://dummyjson.com/todos/add
Method : POST
Body : 
{
		todo: 'Use DummyJSON in the project',
		completed: false,
		userId: 5
}

// Edit a todo / Mark a todo as complete

URL : https://dummyjson.com/todos/<todo id>
Method : PUT
Body :
{
		completed: false,
}

// Delete Todo
URL : https://dummyjson.com/todos/<todo id>
Method : DELETE

```

Use this [**figma design file**](https://www.figma.com/file/6qJ3qC3mhk8VZd1vJVAEgy/Clean-Kanban-Todo-(Community)?type=design&node-id=0-1&mode=design&t=6O9DI1ZK7so7rrQW-0) for reference and make it as pixel perfect as you can. 

## Expectations

- We expect you to make the functional part i.e. todo using the api and other sidebar and is just to test your ui skill.
- On API level, user will only be able to add todo name and mark it as complete. User can drag and drop the cards from one column to the next.
- Your kanban board will only have 2 columns i.e. incomplete and complete.
- We expect simple and well written components, always using the hooks from React.
- Your components should receive props that should be typed with typescript.
- If we change the theme, your components should respect it.

## Questions

We expect you to go in-depth on at the following questions:

1. How will you organize the interface components and name them.
2. How would you organize your components in a scalable application architecture providing support to create components variants, and reuse them in a simple and elegant pattern?
3. Which library will you use to for the kanban board? Explain your choice.

Send us a loom video covering these things once you’re done with the project.

## Development Instructions

1. Once you have [opened the link](https://www.figma.com/file/6qJ3qC3mhk8VZd1vJVAEgy/Clean-Kanban-Todo-(Community)?type=design&node-id=0-1&mode=design&t=6O9DI1ZK7so7rrQW-0) you must sign up and log in so you can have access to the colors, fonts, margins and assets information.
2. Develop the interface as close as possible to the mockup.
3. Implement project theme provider, component rules, props and make it able to interact with external data.
4. Test a piece of the codebase. You can choose which part and functions to test.

## Delivery Instructions

- Make a private git repo, and give us access to the same.
- Send a video using [Loom](https://www.loom.com/) (free to install) answering the proposed questions, explaining your decisions and presenting the code structure.

## Timeline

The scope of this project is designed to be finished in under 6 hours. We’d appreciate if you deliver within a few days of receiving this assignment. 

## What happens after this?

Once you submit the project over email, please give us 2-3 days to review and get back to you! 

If you qualify, we’ll do a quick call to go over specifics like salary, start date, and anything else you’d want to discuss before working together 🙂

We’re looking forward to your submission!