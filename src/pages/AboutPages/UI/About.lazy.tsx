import React from "react";

const AboutPageAsync = React.lazy(() => import("@/pages/AboutPages/UI/AboutPage"));

export default function AboutAsync() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <AboutPageAsync />
    </React.Suspense>
  );
}