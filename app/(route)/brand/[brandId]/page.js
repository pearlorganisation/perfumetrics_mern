import React from "react";

export default function page({ params, searchParams }) {
  const { brandId } = params;
  console.log("brandId", brandId);
  return (
    <div className="min-h-screen">
      <div>Brands</div>
    </div>
  );
}
