import { AdminClient } from "./admin-client";
import { Suspense } from "react";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <AdminClient />
      </Suspense>
    </div>
  );
}