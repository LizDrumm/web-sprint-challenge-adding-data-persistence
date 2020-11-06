exports.seed = function(knex,Promise) {
  return knex('resources').insert([
    { // 1
      resource_name: "Coding Software",
      resource_description: "vscode and sqlite",
    },
    { // 2
     resource_name: "Microphone",
     resource_description: "used to communicate via zoom",
   },
   { // 3
     resource_name: "Computer",
     resource_description: "local machine",
   },
   {
     resource_name: "Zoom",
     resource_description: "video communication platform",
   },
  ]);
 

 };