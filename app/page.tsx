"use client";
import { InputBox } from "@/component/input-box";
import { useEffect, useState } from "react";
import { setDynamicBackground } from "dynamic-color-background";

export default function Home() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setDynamicBackground();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <InputBox value={value} onChange={setValue} />
    </div>
  );
}
