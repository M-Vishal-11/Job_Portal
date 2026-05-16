// ApplyButton.tsx

"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ApplyButton({ jobId }: { jobId: string }) {
  const { data: session, status } = useSession();

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [applicationStatus, setApplicationStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleApply = async () => {
    if (!session) {
      router.push("/auth/signin");
      return;
    }

    try {
      setLoading(true);

      setErrorMessage("");
      setApplicationStatus("idle");

      const res = await axios.post(`/api/jobs/${jobId}/apply`);

      setApplicationStatus("success");
    } catch (e) {
      setApplicationStatus("error");

      if (e instanceof Error) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage("Failed to apply for the job");
      }
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <button
        disabled
        className="w-full rounded-2xl bg-gray-300 px-6 py-4 font-semibold text-white md:w-auto"
      >
        Loading...
      </button>
    );
  }

  if (applicationStatus === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center shadow-md">
        <p className="text-lg font-semibold text-green-700">
          ✅ Application Submitted!
        </p>

        <p className="mt-2 text-sm text-green-600">
          Your application has been sent successfully.
        </p>

        <Link
          href="/dashboard"
          className="mt-4 inline-block rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
        >
          View Applications
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full md:w-auto">
      <button
        onClick={handleApply}
        disabled={loading}
        className="w-full rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
      >
        {loading ? "Applying..." : "Apply for this Position"}
      </button>

      {applicationStatus === "error" && (
        <p className="mt-3 text-sm font-medium text-red-500">
          ❌ {errorMessage}
        </p>
      )}
    </div>
  );
}
