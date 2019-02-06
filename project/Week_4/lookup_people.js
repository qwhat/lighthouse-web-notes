const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
const name = `'${process.argv[2]}'`
console.log(name);
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
client.query(`SELECT * FROM famous_people WHERE first_name = ${name}`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(`found ${result.rows.length} person(s) by the name ${name}`);
    const matchedArr = result.rows
     matchedArr.forEach(function(object, i) {
       console.log(`- ${i + 1}: ${object.first_name} ${object.last_name}, born ${object.birthdate}`)
     })
    client.end();
  });
});
