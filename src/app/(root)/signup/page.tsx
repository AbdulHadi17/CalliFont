import SignUpForm from '@/components/SignUpForm';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  p-4">
      <SignUpForm />
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
          Sign in
        </Link>
      </p>
    </main>
  );
}
