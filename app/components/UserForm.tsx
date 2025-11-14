"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function UserForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!name.trim() || !username.trim() || !password) {
      setMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      const usersCol = collection(db, "users");
      await addDoc(usersCol, {
        name: name.trim(),
        username: username.trim(),
        password, // NOTE: storing plaintext passwords is insecure; use hashing or Firebase Auth for production
        createdAt: serverTimestamp(),
      });

      setMessage("User created successfully.");
      setName("");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMessage("Failed to create user. See console for details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="mb-4 text-xl font-semibold">Create user</h2>
      <div className="mb-3">
        <label className="block text-sm font-medium">Name</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium">Username</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          className="mt-1 w-full rounded border px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-foreground px-4 py-2 text-background disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create user"}
        </button>
        {message && <span className="text-sm text-zinc-600">{message}</span>}
      </div>
    </form>
  );
}
