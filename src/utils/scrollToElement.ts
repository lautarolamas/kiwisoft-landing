import { MouseEvent } from "react";

export function handleScroll(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")?.substring(1);
  const targetElement = document.getElementById(targetId!);
  if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
}
