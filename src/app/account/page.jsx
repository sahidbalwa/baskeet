"use client";
import { useAuth } from '@/lib/auth';

export default function Account(){
  const { user, isAdmin, signInAsAdmin, signOut } = useAuth();
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Your Account</h1>
      {user ? (
        <div className="card p-4 space-y-2">
          <div><span className="font-medium">Email:</span> {user.email}</div>
          <div><span className="font-medium">Name:</span> {user.name}</div>
          <div className="flex gap-2">
            {!isAdmin && <button className="btn" onClick={signInAsAdmin}>Mock: Become Admin</button>}
            <a className="btn" href="/admin">Go to Admin</a>
            <button className="btn" onClick={signOut}>Sign out</button>
          </div>
        </div>
      ) : (
        <div className="card p-4">You are signed out. (Replace with Clerk SignIn)</div>
      )}
    </div>
  );
}
