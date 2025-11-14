import Image from "next/image";
import UserForm from "./components/UserForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans flex items-center justify-center py-12 px-6">
      <main className="w-full max-w-5xl bg-white dark:bg-[#0b0b0b] rounded-2xl shadow-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: hero / description */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image src="/next.svg" alt="Next.js logo" width={64} height={16} className="dark:invert" />
              <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">Simple Firestore user demo</h1>
            </div>

            <p className="text-zinc-700 dark:text-zinc-400 max-w-prose">
              Create a user quickly using the form on the right. This demo writes to the
              <span className="font-medium"> users</span> collection in Firestore. For production use,
              consider using Firebase Authentication and never store plaintext passwords.
            </p>

            <div className="flex gap-3 mt-4">
              <a
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            </div>
          </section>

          {/* Right: form card */}
          <section className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-xl border border-black/[.06] dark:border-white/[.06] bg-white dark:bg-[#080808] p-6 shadow-sm">
              <UserForm />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
