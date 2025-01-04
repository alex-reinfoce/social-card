import { tv } from "tailwind-variants";

const style = tv({
  slots: {
    base: "border border-black inline-block",
  },
})();

export const Button = () => {
  return <button className={style.base()}>Button</button>;
};
