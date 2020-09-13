export interface IAddTask{
    handleCreateNewTask?() : void;
    handleChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}