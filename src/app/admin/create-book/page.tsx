
import { CreateBookClient } from "./create-book-client";
import { Suspense } from "react";

export default function CreateBookPage() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <CreateBookClient />
      </Suspense>
    </div>
  );
}
