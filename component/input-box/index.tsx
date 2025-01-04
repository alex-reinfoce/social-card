"use client";

import { tv } from "tailwind-variants";

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const iconBox = tv({
  base: "w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#e4e4e4] mr-[10px] cursor-pointer",
  variants: {
    active: {
      true: "bg-black",
    },
  },
});

export const InputBox = ({ value, onChange }: InputBoxProps) => {
  const valid = Boolean(value.trim());

  return (
    <div className="w-[780px] bg-white rounded-[36px] border border-[E7E9ED] transition-all duration-300 hover:shadow-[0_0_40px_#0000000f] overflow-hidden flex items-center">
      <input
        placeholder="Please enter the URL"
        type="text"
        className="flex-1 leading-[54px] px-[25px] outline-none"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        data-form-type="other"
        data-lpignore="true"
        aria-label="Twitter URL input"
        role="textbox"
        list="no-list"
      />
      <div className={iconBox({ active: valid })}>
        <svg
          width="13px"
          height="15px"
          viewBox="0 0 13 15"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              id="Twitter-giveaway-tool-index"
              transform="translate(-1311, -566)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <g id="Search" transform="translate(565, 545)">
                <polygon
                  id="Enter"
                  points="755.17193 27.07111 750.515 22.41422 751.92921 21 759.00033 28.07111 751.92921 35.14211 750.515 33.72791 755.17183 29.07111 746.00003 29.07121 746 27.07121"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
