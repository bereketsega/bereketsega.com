/**
 * Project type
 */
export interface ProjectType {
    id: string;
    title: string;
    description: string;
    tools: string[];
    image: string;
    sourceCode: string;
    demo?: string;
    status: ProjectStatus;
    createdAt: string;
}

/**
 * Project status enum
 */
export enum ProjectStatus {
    DONE = 'DONE',
    IN_PROGRESS = 'IN PROGRESS',
}
