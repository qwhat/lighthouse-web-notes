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

function useKnex() {
  knex.select("*")
      .from("famous_people")
      .where("first_name", "=", process.argv[2])
      .then((results) => {
        console.log(results)
      })
}

useKnex()
