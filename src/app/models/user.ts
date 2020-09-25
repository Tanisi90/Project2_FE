import { EmailValidator } from '@angular/forms';

export class User {
    public user_id: number;
    public username: string;
    public password: string;
    public first_name: string;
    public last_name: string;
    public email: string;

    constructor(username: string, password: string, first_name: string, last_name: string, email: string, user_id?: number) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.user_id = user_id;
    }


}
