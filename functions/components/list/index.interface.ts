export interface IList {
  handleDeleteTask: (id: string, text: string) => void;

  handleOpenModal(id: string): void;

  list?: any;
}