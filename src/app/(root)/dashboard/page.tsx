'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import AuthButton from '@/components/AuthButton';
import { ModeToggle } from '@/components/toggle';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-foreground">CalliFont Dashboard</h1>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-card rounded-lg shadow p-6 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Welcome to your Dashboard!</h2>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>User ID:</strong> {user.id}
                </p>
                <p className="text-muted-foreground">
                  <strong>Account created:</strong>{' '}
                  {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-semibold mb-2 text-foreground">User Metadata</h3>
                <pre className="bg-muted p-4 rounded-md overflow-auto text-sm text-muted-foreground">
                  {JSON.stringify(user.user_metadata, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
