export class Task {
    public id?: number;
    public name: string;
    public dueDate: Date;
    public completed: boolean;

    constructor(name: string, dueDate?: Date, completed?: boolean) {
        this.name = name;
        this.dueDate = dueDate || new Date();
        this.completed = completed || false;
    }
}
