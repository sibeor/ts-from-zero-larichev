"use strict";
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.lastName}`;
}
const user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    city: 'Moscow',
    age: 33
};
console.log(getFullName(user));
