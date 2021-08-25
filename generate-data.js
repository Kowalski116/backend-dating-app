const faker = require('faker');
const fs = require('fs')

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const randomUser = (count) => {
    const listUser = []
    for (let i = 0; i < count; i++) {
        const user = {
            id: faker.datatype.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender: faker.name.gender(),
            email: faker.internet.email(),
            dateOfBirth: randomDate(new Date(2000, 0, 1), new Date(1980, 0, 1)),
            picture: faker.image.people(),
        }
        listUser.push(user)
    }
    return listUser
}
(() => {
    const db = randomUser(20)

    //write file db.json
    fs.writeFile('db.json', JSON.stringify(db), () => {
        console.log("Generate data successfully !!!");
    })
})()