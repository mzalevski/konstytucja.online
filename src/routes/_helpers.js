export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 700 && window.innerHeight <= 900;
};
