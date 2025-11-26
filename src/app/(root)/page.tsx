'use client';

import AuthButton from '@/components/AuthButton';
import { ModeToggle } from '@/components/toggle';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-primary">CalliFont</h1>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="text-center flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-5xl font-bold mb-4 text-foreground">
          Welcome to CalliFont
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          A modern web application with Supabase authentication built with Next.js
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl">
          <div className="bg-card p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-lg font-semibold mb-2 text-primary">🔐 Secure Auth</h3>
            <p className="text-muted-foreground text-sm">
              Complete authentication system with Supabase
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-lg font-semibold mb-2 text-primary">⚡ Next.js 16</h3>
            <p className="text-muted-foreground text-sm">
              Built with the latest Next.js features
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-lg font-semibold mb-2 text-primary">🎨 Tailwind CSS</h3>
            <p className="text-muted-foreground text-sm">
              Beautiful, responsive design with Tailwind
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
