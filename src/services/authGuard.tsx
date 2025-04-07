// components/AuthGuard.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface AuthGuardProps {
  children: JSX.Element;
  baseUrl: string
}

export const AuthGuard = ({ children, baseUrl }: AuthGuardProps) => {
  const router = useRouter();

  useEffect(() => {
    // Check if "user" exists in localStorage
    const user = localStorage.getItem('user');

    // If no user is found, redirect to the login page
    if (!user) {
      router.push(baseUrl + '/account/authentication');
    }
  }, [router]);

  // If "user" exists, render the children (protected content)
  const user = localStorage.getItem('user');
  if (user) {
    return children;
  }

  // If no user is found, show nothing (or a loading spinner)
  return null;
};