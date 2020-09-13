import {IOption} from "../option/index.interface";

export interface IListItem {
  list: {
    id: string;
    text: string;
  };
  options: IOption;
}