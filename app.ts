let revenue: number = 1000;
let bonus: number = 500;

let res: number = revenue + bonus;
console.log(res)

function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

const getFullNameArrow = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
}