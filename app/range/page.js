"use client";
import React, { useState } from "react";
import { CustomRangeSlider } from "../_components/RangeSlider/RangeSlider";

export default function page() {
  const [brightness, setBrightness] = useState(75);

  return (
    <div className="max-w-md mx-auto min-h-screen pt-28">
      <CustomRangeSlider
        min={0}
        max={100}
        defaultValue={brightness}
        onChange={setBrightness}
        progressColor="bg-gradient-to-r from-yellow-400 to-orange-500"
        showTicks
        tickCount={5}
        valueSuffix="%"
      />
    </div>
  );
}
