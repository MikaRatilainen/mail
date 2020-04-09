export interface IOption {
    id: number;
    value: string;
}

export interface GitUserResponse {
    items: GitUser[];
}

export interface GitUser {
    login: string;
    id: number;
    html_url: string;
}
