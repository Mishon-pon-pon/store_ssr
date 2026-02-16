export interface INavigation {
  path: string;
  labelKey: string;
}

export enum EPaths {
  home = "/",
  rackets = "/rackets",
  details = "/rackets/:id",
}
