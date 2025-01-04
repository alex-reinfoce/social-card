"use client";
import { InputBox } from "@/component/input-box";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <InputBox value={value} onChange={setValue} />
    </div>
  );
}
