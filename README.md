# SaaS AI Platform with Next.js 13, Tailwind, Prisma, PlanetScale, OpenAI, Replicate, Node.js 18 & Stripe 


### .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

___

#### Thank you very much [Code with Antonio](https://www.youtube.com/@codewithantonio) for teaching me 