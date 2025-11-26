'use client';

import AuthButton from './components/AuthButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-blue-600">CalliFont</h1>
            <AuthButton />
          </div>
        </div>
      </nav>

      <main className="text-center flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to CalliFont
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          A modern web application with Supabase authentication built with Next.js
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">🔐 Secure Auth</h3>
            <p className="text-gray-600 text-sm">
              Complete authentication system with Supabase
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">⚡ Next.js 16</h3>
            <p className="text-gray-600 text-sm">
              Built with the latest Next.js features
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">🎨 Tailwind CSS</h3>
            <p className="text-gray-600 text-sm">
              Beautiful, responsive design with Tailwind
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
