export interface IModal{
  handleCloseModal(): void;
  handleUpdateTask(value: {id?: string, task?: string}): void;
  modalItem: {id?: string; text?: string};
  modal: boolean;
}