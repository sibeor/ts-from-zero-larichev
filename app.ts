let revenue: number = 1000;
let bonus: number = 500;

let res: number = revenue + bonus;
console.log(res)

function getFullName(userEntity: {firstname: string, surname: string}): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
    firstname: 'Ivan',
    surname: 'Ivanov',
    city: 'Moscow',
    age: 33
}
console.log(getFullName(user))
let info: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string,
        }
    }
}