exports.seed = function(knex,Promise) {
  return knex('tasks').insert([
    { // 1
      task_description: "use _knex migrations_",
      notes: "Design the data model to create the database and tables",
      completed: false,
      project_id: 1,
    },
    { // 2
      task_description: "create a database based on given specifications",
      notes: "refer to README",
      completed: false,
      project_id: 1,
    },
    { // 3
      task_description: " Build an API with endpoints ",
      notes: "endpoint specifications in documentation",
      completed: false,
      project_id: 1,
    },
    { // 4
     task_description: "Create a To-Do App",
     notes: "plan UI first",
     completed: false,
     project_id: 2,
   },
   { // 5
    task_description: "Refer to Redux Documentation",
    notes: "found on internet",
    completed: false,
    project_id: 2,
  },
   { // 6
     task_description: "Refine wireframe of page",
     notes: "work closely with client",
     completed: false,
     project_id: 3,
   },
  ]);
 

 };