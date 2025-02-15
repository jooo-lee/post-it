#! /usr/bin/env node

require('dotenv').config();
const { Client } = require('pg');

const createTable = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 20 ),
  added TIMESTAMPTZ
);`;

const insertValues = `
INSERT INTO messages (text, username, added)
VALUES
  ('Hi there!', 'John Doe', $1),
  ('I was here', 'Anon898', $2);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(createTable);
  await client.query(insertValues, [new Date(), new Date()]);
  await client.end();
  console.log('done');
}

main();
