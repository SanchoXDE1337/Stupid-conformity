class EmailParser {
    constructor(email) {
        this.email = email;
    }
    get name() {
        if (this.isCorrect) {
            let a = this.email.indexOf("@");
            return this.email.substring(0, a);
        }
        else {
            return null;
        }
    }
    get isCorrect() {
        if (this.email === "sanhoxd@gmail.com") {
            return true;
        }
        else return false;
    }

    get domain() {
        if (this.isCorrect) {
            let a = this.email.indexOf("@");
            return this.email.substring(a+1);
        }
        else {
            return null;
        }
    }
}

let email = new EmailParser("dolgov-alcemist@mail.ru");
console.log(email.email);
console.log(email.isCorrect);
let email2 = new EmailParser("sanhoxd@gmail.com");
console.log(email2.email);
console.log(email2.isCorrect);
console.log(email2.domain);

