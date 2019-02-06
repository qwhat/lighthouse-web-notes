const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

function addPerson(first_name, last_name, date) {
  knex("famous_people")
    .insert({
      first_name: first_name,
      last_name: last_name,
      birthdate: date,
    })
    .then((results)=>{
    })
}

addPerson(process.argv[2], process.argv[3], process.argv[4])
