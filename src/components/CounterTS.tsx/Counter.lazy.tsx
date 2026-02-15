import React from "react";

const CounterPageAsync = React.lazy(() => import("./Counter"));

export default function Counter() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CounterPageAsync />
    </React.Suspense>
  );
}