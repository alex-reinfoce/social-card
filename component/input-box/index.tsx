"use client";
interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export const InputBox = ({ value, onChange }: InputBoxProps) => {
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
    </div>
  );
};
