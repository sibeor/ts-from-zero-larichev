const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLowerCase())
}
const res = skills
    .filter(s => s !== 'DevOps')
    .map(skill => skill.toUpperCase() + '!')
    .reduce((a,b) => a + b );
console.log(res)