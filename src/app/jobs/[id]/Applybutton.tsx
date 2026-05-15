"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ApplyButton(jobId: { jobId: string }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleApply = () => {
    if (!session) {
      router.push("/auth/signin");
      return;
    }

    try {
    } catch (e) {
      console.log(e);
    }
  };

  if (status == "loading") {
    return <button disabled>Loading...</button>;
  }

  return (
    <>
      <button onClick={handleApply}>Apply for this Position</button>
    </>
  );
}
