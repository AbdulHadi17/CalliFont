# CalliFont - Supabase Authentication

A modern Next.js application with complete Supabase authentication implementation.

## Features

✅ **Complete Authentication System**
- Email/Password Sign Up & Sign In
- OAuth Support (Google, GitHub, Facebook, Twitter)
- Password Reset
- Protected Routes
- Session Management
- User Context with React Context API

✅ **Modern Stack**
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS 4
- Supabase Auth

## Project Structure

```
src/app/
├── components/          # Reusable UI components
│   ├── AuthButton.tsx   # Authentication button (sign in/out)
│   ├── LoginForm.tsx    # Login form component
│   └── SignUpForm.tsx   # Sign up form component
├── context/
│   └── AuthContext.tsx  # Auth context provider
├── hooks/
│   └── useAuth.ts       # Custom hook for auth
├── lib/
│   └── supabaseClient.ts # Supabase client and auth helpers
├── auth/
│   └── callback/
│       └── route.ts     # OAuth callback handler
├── dashboard/
│   └── page.tsx         # Protected dashboard page
├── login/
│   └── page.tsx         # Login page
├── signup/
│   └── page.tsx         # Sign up page
└── page.tsx             # Home page
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a new project at [Supabase](https://supabase.com)
2. Copy your project URL and anon key from Settings > API
3. Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Configure Authentication Providers (Optional)

To enable OAuth providers like Google or GitHub:

1. Go to Authentication > Providers in your Supabase dashboard
2. Enable and configure your desired providers
3. Add the callback URL: `http://localhost:3000/auth/callback`

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Authentication Functions

The `supabaseClient.ts` provides the following helper functions:

- `signUp(email, password)` - Register a new user
- `signIn(email, password)` - Sign in with credentials
- `signInWithOAuth(provider)` - Sign in with OAuth provider
- `signOut()` - Sign out current user
- `getCurrentUser()` - Get current authenticated user
- `getSession()` - Get current session
- `resetPassword(email)` - Send password reset email
- `updatePassword(newPassword)` - Update user password
- `updateUserMetadata(metadata)` - Update user metadata
- `onAuthStateChange(callback)` - Listen to auth state changes

## Usage Examples

### Using the Auth Hook

```tsx
'use client';

import { useAuth } from '@/app/hooks/useAuth';

export default function MyComponent() {
  const { user, loading, signOut } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
```

### Protected Routes

Check the `dashboard/page.tsx` for an example of a protected route that redirects unauthenticated users to login.

## Available Routes

- `/` - Home page
- `/login` - Login page
- `/signup` - Sign up page
- `/dashboard` - Protected dashboard (requires authentication)
- `/auth/callback` - OAuth callback handler

## Security Notes

- Never commit `.env.local` to version control
- The `.env.example` file is provided as a template
- Use Row Level Security (RLS) in Supabase for database protection
- Always validate user input on both client and server

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)

## License

MIT
