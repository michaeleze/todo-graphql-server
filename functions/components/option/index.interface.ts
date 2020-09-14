export interface IOption {
  handleDeleteTask: (id: string, text: string) => void;
  handleOpenModal(id: string): void;
  id: string;
  text: string;
}