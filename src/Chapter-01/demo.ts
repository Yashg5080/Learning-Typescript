interface Contact extends Address{
    id: number;
    name: ContaceName;
    birthDate?: Date;
    status: ContactStatus;
}

interface Address {
    line1: string;
    line2?: string;
    province?: string;
    postalCode?: number;
}

// By default enums have integer values we can assign any values to them as we want.
enum ContactStatus{
    ACTIVE = 'active';
    INACTIVE = 'inactive',
    NEW = 'new',
}
let primaryContact:Contact={
    id: 0,
    name: "",
    birthDate: new Date('01/01/2022'),
    line1: "gdsg",
    status: ContactStatus.ACTIVE,
}

// It can be used as an alias to the existing type like here we used it as an alias to the type string.
type ContaceName = string;