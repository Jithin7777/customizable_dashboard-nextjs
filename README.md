This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


PROJECT
This is a customizable dashboard built with Next.js, MongoDB,shadcCN UI and Tailwind CSS. The application allows users to manage widget visibility on their dashboard, with preferences persisted across sessions.

## Technologies Used

### Frontend:
- **Next.js with TypeScript**
- **ShadCN UI** (for UI components)
- **Tailwind CSS** (for styling)

### Backend:
- **Next.js API Routes**  (for API management)
- **MongoDB** (for data persistence)
- **Mongoose** (for interacting with MongoDB)

## Technical Decisions
Next.js : We chose Next.js for its powerful features like server-side rendering, API routes, and file-based routing. TypeScript provides static type checking, improving the development experience.

MongoDB & Mongoose: MongoDB was chosen for its flexibility and scalability. Mongoose was used to define and interact with MongoDB schemas in a structured manner.

Tailwind CSS: Tailwind CSS was selected for its utility-first approach, allowing for quick and consistent UI development without the need to write custom CSS.

ShadCN UI: We used ShadCN UI for its pre-built components to quickly create a clean and professional UI.

State Persistence: Widget visibility preferences are stored in MongoDB, ensuring they persist across page refreshes or user sessions.

Context API for State Management: We used React's Context API to manage global state across components, particularly for managing widget visibility. The Context API provides an easy and clean way to share state (like widget visibility) across multiple components without prop drilling, simplifying the state management process in the app.

## Architectural Decisions

API Routes in Next.js: Used Next.js API Routes for handling backend logic, making the project simpler by consolidating both the frontend and backend in one repository. This approach ensures faster development cycles and easier deployment.


State Management with Context API: The Context API is used to manage and share the state of widget visibility across the application. It provides a simple way to handle global state without the need for external libraries like Redux. This also ensures that widget visibility preferences are maintained across the app.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
