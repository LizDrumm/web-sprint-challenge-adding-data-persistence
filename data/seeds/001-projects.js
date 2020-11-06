exports.seed = function(knex,Promise) {
  return knex('projects').insert([
    { // 1
      project_name: "Sprint",
      project_description: "In this project you will be given a set of requirements and must design a database to satisfy them.",
      completed: false,
    },
    { // 2
     project_name: "React App",
     project_description: "Create React App using Redux",
     completed: false,
   },
   { // 3
     project_name: "Design Landing Page",
     project_description: "Work on Marketing Page",
     completed: false,
   },
  ]);
 

 };