"use server";
import { JSDOM } from "jsdom";

export const resolvePage = async (url: string) => {
  const res = await fetch(url);
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const title = document.title;
  return {
    title,
  };
};
