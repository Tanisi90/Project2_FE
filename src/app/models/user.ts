import { EmailValidator } from '@angular/forms';

export class User {
    private username: string;
    private password: string;
    private first_name: string;
    private last_name: string;
    private email: string;

    constructor(username: string, password: string, first_name: string, last_name: string, email: string) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
}
