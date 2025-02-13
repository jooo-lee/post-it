# Post-it!

My implementation of the [mini message board project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) for [The Odin Project](https://theodinproject.com/). Check out the [live preview](https://surprising-doralia-jooo-lee-b92fcbf6.koyeb.app/)!

## Description

This is a message board where users can post a message for others to see. It was built using Express, EJS and PostgreSQL.

![Screenshot of Post-it! homepage](./public/demo-img.png)

## Features

- Renders messages posted by other users
- Allows user to view details of messages
- Stores data in a PostgreSQL database

## I learned how to:

- Set up a basic MVC application using Express and Node.js
- Use a template engine (EJS) to create views
- Serve static assets in Express
- Deploy an application using a PaaS ([Koyeb](https://www.koyeb.com/))
- Deploy and integrate a database on a hosting service ([Neon](https://neon.tech/))
- Set up and query using [node-postgres](https://node-postgres.com/)
- Populate a database using a script

## A note on timezones:

Message times will always be converted to the America/Toronto timezone when displayed. In the future, I may come back and refactor it so that it displays times based on the user's current timezone.

## Acknowledgements:

[Favicon](https://www.flaticon.com/free-icon/sticky-note_4434927?term=sticky+note&page=1&position=15&origin=tag&related_id=4434927) from [Flaticon](https://www.flaticon.com/).
