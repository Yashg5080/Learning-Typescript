type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

export interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
    email: string;
}

let primaryContact: Contact = {
    id: 0,
    name: "Yash Gupta",
    email: ""
}

type ContactField = keyof Contact;

function getValue<T>(source: T,propertyName: keyof T){
    return source[propertyName];
}

getValue<{name:string}>({name:'ts'},'name')