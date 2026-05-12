import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          Job Board
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/jobs" className="transition hover:text-blue-600">
            Browse Jobs
          </Link>

          <Link href="/jobs/post" className="transition hover:text-blue-600">
            Post Jobs
          </Link>

          <Link href="/dashboard" className="transition hover:text-blue-600">
            Dashboard
          </Link>

          {/* Button */}
          <Link
            href="/auth/signin"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
