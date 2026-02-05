import { AdminClient } from "./admin-client";
import { Suspense } from "react";
import { AdminSkeleton } from "./admin-skeleton";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<AdminSkeleton />}>
        <AdminClient />
      </Suspense>
    </div>
  );
}
