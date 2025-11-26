import { createClient, SupabaseClient, User, Session, AuthError } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Auth Helper Functions

/**
 * Sign up a new user with email and password
 */
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) {
    console.error('Error signing up:', error.message);
    return { user: null, error };
  }
  
  return { user: data.user, error: null };
};

/**
 * Sign in an existing user with email and password
 */
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    console.error('Error signing in:', error.message);
    return { user: null, session: null, error };
  }
  
  return { user: data.user, session: data.session, error: null };
};

/**
 * Sign in with OAuth provider (Google, GitHub, etc.)
 */
export const signInWithOAuth = async (provider: 'google' | 'github' | 'facebook' | 'twitter') => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
  
  if (error) {
    console.error('Error signing in with OAuth:', error.message);
    return { error };
  }
  
  return { data, error: null };
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Error signing out:', error.message);
    return { error };
  }
  
  return { error: null };
};

/**
 * Get the current user
 */
export const getCurrentUser = async (): Promise<{ user: User | null; error: AuthError | null }> => {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error('Error getting current user:', error.message);
    return { user: null, error };
  }
  
  return { user, error: null };
};

export const getSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error) {
    console.error('Error getting session:', error.message);
    return { session: null, error };
  }
  
  return { session, error: null };
};

/**
 * Send password reset email
 */
export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`,
  });
  
  if (error) {
    console.error('Error sending reset password email:', error.message);
    return { error };
  }
  
  return { data, error: null };
};

/**
 * Update user password
 */
export const updatePassword = async (newPassword: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  
  if (error) {
    console.error('Error updating password:', error.message);
    return { user: null, error };
  }
  
  return { user: data.user, error: null };
};

/**
 * Update user metadata
 */
export const updateUserMetadata = async (metadata: Record<string, unknown>) => {
  const { data, error } = await supabase.auth.updateUser({
    data: metadata,
  });
  
  if (error) {
    console.error('Error updating user metadata:', error.message);
    return { user: null, error };
  }
  
  return { user: data.user, error: null };
};

/**
 * Listen to auth state changes
 */
export const onAuthStateChange = (callback: (event: string, session: Session | null) => void) => {
  return supabase.auth.onAuthStateChange(callback);
};

export type { User, Session, AuthError };
