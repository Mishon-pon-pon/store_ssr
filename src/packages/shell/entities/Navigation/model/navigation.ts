import { EPaths, INavigation } from "./interfaces";

export const getNavigation = (): INavigation[] => [
  { labelKey: "nav.home", path: EPaths.home },
  { labelKey: "nav.rackets", path: EPaths.rackets },
];
