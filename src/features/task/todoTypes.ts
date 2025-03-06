type Priority = "low" | "medium" | "high";

export interface Task {
    id: string;
    todoTitle: string;
    description?: string;
    category?: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    dueDate?: Date;
    priority?: Priority;
    tags?: string[];
    
}