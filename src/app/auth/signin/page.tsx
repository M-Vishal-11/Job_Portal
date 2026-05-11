import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-linear-to-br from-slate-100 via-white to-blue-100 px-4 py-10">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-3xl font-bold text-white shadow-xl">
            JB
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Continue to your Job Board dashboard
          </p>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-black px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900 active:scale-[0.98]">
            {/* GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008 10.938c.588.108.8-.256.8-.57v-2.02c-3.25.706-3.938-1.568-3.938-1.568-.532-1.35-1.3-1.71-1.3-1.71-1.064-.727.08-.713.08-.713 1.176.083 1.794 1.207 1.794 1.207 1.045 1.79 2.742 1.273 3.41.973.106-.757.41-1.273.744-1.565-2.595-.295-5.323-1.298-5.323-5.778 0-1.276.455-2.32 1.2-3.138-.12-.296-.52-1.486.113-3.097 0 0 .978-.313 3.2 1.198a11.07 11.07 0 015.828 0c2.222-1.51 3.2-1.198 3.2-1.198.633 1.61.233 2.8.114 3.097.746.818 1.2 1.862 1.2 3.138 0 4.49-2.732 5.48-5.336 5.77.42.36.794 1.096.794 2.21v3.276c0 .317.21.684.806.568A11.502 11.502 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
            </svg>
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="text-sm text-gray-400">Secure Authentication</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm leading-6 text-gray-500">
          By continuing, you agree to our{" "}
          <Link
            href="/terms"
            className="font-medium text-blue-600 hover:underline"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-medium text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </main>
  );
}
