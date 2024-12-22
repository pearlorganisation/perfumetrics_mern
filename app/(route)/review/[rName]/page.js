import RequestAReview from "@/app/_components/RequestAReview/RequestAReview";
import WriteAReview from "@/app/_components/WriteAReview/WriteAReview";
import React from "react";

export default function page({ params }) {
  const { rName } = params;
  // console.log(params);
  return (
    <div>
      {rName === "writeAreview" ? <WriteAReview /> : <RequestAReview />}
    </div>
  );
}
