// type ContactName = string;

// enum ContactStatus {
//     Active = "active",
//     Inactive = "inactive",
//     New = "new"
// }

// interface Contact {
//     id: number;
//     name: ContactName;
//     birthDate?: Date;
//     status?: ContactStatus;
// }

// interface Address {
//     line1: string;
//     line2: string;
//     province: string;
//     region: string;
//     postalCode: string;
// }

// function getBirthDate(contact: Contact) {
//     if (typeof contact.birthDate === "number") {
//         return new Date(contact.birthDate);
//     }
//     else if (typeof contact.birthDate === "string") {
//         return Date.parse(contact.birthDate)
//     }
//     else {
//         return contact.birthDate
//     }
// }

// let primaryContact: Contact = {
//     id: 12345,
//     name: "Jamie Johnson"
// }

// -------------- An Alternative to above code is this 
type ContactName = string;


type ContactStatus1 = "active" | "inactive" | "new"

type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

export interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

type AddressableContact = Contact & Address

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active",

}