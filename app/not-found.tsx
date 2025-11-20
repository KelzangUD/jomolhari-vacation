// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] text-center flex items-center justify-center">
      <div>
        <h1 className="font-bold text-4xl md:text-[10rem] text-primary">404</h1>
        <p className="mb-6">You seem lost</p>
        <Link href="/" className="bg-primary text-white px-4 py-2 rounded-md">Return Home</Link>
      </div>
    </div>
  );
}
