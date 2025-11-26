import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="text-red flex flex-col items-center justify-center min-h-screen p-4">

      <LoginForm />
      <p className="mt-4 text-sm text-secondary">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-ba text-primary hover:text-primary-100 font-medium">
          Sign up
        </Link>
      </p>
    </main>
  );
}
