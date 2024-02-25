import { useMediaQuery } from "react-responsive";

// TODO когда прояснятся брейкпоинты, вынести их в отдельные переменные
export function useLg() {
  const isTablet = useMediaQuery({ query: "(min-width: 1440px)" });
  return isTablet;
}
export function useMd() {
  const isTablet = useMediaQuery({ query: "(min-width: 1366px)" });
  return isTablet;
}
export function useSm() {
  const isTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  return isTablet;
}
export function useXs() {
  const isTablet = useMediaQuery({ query: "(min-width: 740px)" });
  return isTablet;
}

export function useMob() {
  const isTablet = useMediaQuery({ query: "(max-width: 739px)" });
  return isTablet;
}

export function useTablet() {
  const isTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  return isTablet;
}

export function useMobile() {
  const isTablet = useMediaQuery({ query: "(min-width: 740px)" });
  return isTablet;
}

export function useLarge() {
  const isLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  return isLarge;
}

export function usePhone() {
  const isPhone = useMediaQuery({ minWidth: 320, maxWidth: 480 });
  return isPhone;
}

export function useExtraLarge() {
  const isExtraLarge = useMediaQuery({ query: "(min-width: 1440px)" });
  return isExtraLarge;
}
