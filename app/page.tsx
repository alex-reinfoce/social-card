"use client";
import { InputBox } from "@/component/input-box";
import { useCallback, useEffect, useMemo, useState } from "react";
import { setDynamicBackground } from "dynamic-color-background";
import { debounce } from "lodash-es";
import { resolvePage } from "./action";

// summary_large_image
export default function Home() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setDynamicBackground();
  }, []);

  const handleChange = useCallback(
    debounce((value: string) => {
      resolvePage(value).then((res) => {
        console.log(res);
      });
    }, 1000),
    []
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <InputBox
        value={value}
        onChange={(value) => {
          handleChange(value);
          setValue(value);
        }}
      />
    </div>
  );
}
