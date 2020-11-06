exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name',128).notNullable().unique();
        tbl.text('project_description',128);
        tbl.boolean('completed').defaultTo(false).notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name',128).notNullable().unique();
        tbl.text('resource_description',128);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('task_description',128).notNullable();
        tbl.text('notes',128);
        tbl.boolean('completed').defaultTo(false).notNullable();
        //getting projects_id from projects table
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .createTable('projects_and_resources', tbl => {
        tbl.increments();
  
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  
        tbl.integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects_and_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  };