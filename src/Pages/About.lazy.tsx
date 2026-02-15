import React from "react";

const AboutPageAsync = React.lazy(() => import("./About"));

export default function About() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <AboutPageAsync />
    </React.Suspense>
  );
}