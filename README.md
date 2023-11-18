# Clon Discord

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Guia

npm run dev para correr proyecto

Start by creating a new Next.js project using `create-next-app`:

`npx create-next-app@latest my-app --typescript --tailwind --eslint`

Run the `shadcn-ui` init command to setup your project:

`npx shadcn-ui@latest init`

### Instalar lo siguente

npx shadcn-ui@latest add button

npm i next-theme

npx shadcn-ui@latest add dropdown-menu

npm i -D prisma

npx prisma init

npx prisma generate

npx prisma db push

npm install @clerk/nextjs

npm i @prisma/client para instalar el cliente de prisma

npx prisma studio para correr el cliente de prisma

npm install react-hook-form

npx shadcn-ui@latest add form

npx shadcn-ui@latest add input para instalar

npx shadcn-ui@latest add dialog para instalar

npm i uuid

npm i @types/uuid

npm install uploadthing @uploadthing/react

npm i axios

npx shadcn-ui@latest add tooltip

npx shadcn-ui@latest add separator

ScrollArea

npx shadcn-ui@latest add scroll-area

npm i zustand

npx shadcn-ui@latest add avatar

npm i query-string

npx shadcn-ui@latest add select

npx shadcn-ui@latest add command

npx shadcn-ui@latest add sheet

npm i socket.io

npm i socket.io-client

npx shadcn-ui@latest add badge

npx shadcn-ui@latest add popover

npm i emoji-mart @emoji-mart/data @emoji-mart/react

delete messages

npm install @tanstack/react-query

npm i date-fns

npm install livekit-server-sdk livekit-client @livekit/components-react @livekit/components-styles --save

# Arreglar el problema del navbar

If you are having an issue with disappearing navbar & sidebar upon leaving the server, deleting the server etc.

You can fix this by moving UploadThing's styles into global.css at the end of the file instead of in the react component.

Step 1:

- Remove the import for upload-thing styles inside file-upload.tsx component
- DELETE => import "@uploadthing/react/styles.css";

Step 2:

- Add the import at the bottom of the globals.css file instead

// globals.css
...
@import "~@uploadthing/react/styles.css";

Step 3 (optional):

- Wrap the tailwind config with "withUt":

// tailwind.config.js

const { withUt } = require("uploadthing/tw");
module.exports = withUt({
...leave everything the same
});

### Webs utilizadas

[https://clerk.com](https://clerk.com/)

[https://planetscale.com](https://planetscale.com/)

[https://cloud.livekit.io/](https://cloud.livekit.io/login?r=%252F%253Fphid%253D018bdfc6-bdbe-7e47-8c0c-0780672cb556)