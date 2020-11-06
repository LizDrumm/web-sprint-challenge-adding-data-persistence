const db = require('../data/db-config');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,
    removeProject,
    getProjectsById,
    getTasksById,
    getResourcesById
}

function getProjects() {
    return db('projects')
};

function getResources() {
    return db('resources')
};

function getTasks() {
    return db('tasks')
    .select('tasks.id', 'tasks.task_description', 'tasks.notes', 'tasks.completed', 'tasks.project_id','projects.project_name','projects.project_description')
    .join('projects', 'projects.id', 'tasks.project_id')
};

function addProject(project) {
    return db('projects')
    .insert(project, 'id')
    .then(ids => {
        const id = ids[0];

        return db('projects').where({ id }).first();
    });
};

function addResource(resource) {
    return db('resources')
    .insert(resource, 'id')
    .then(ids => {
        const id = ids[0];

        return db('resources').where({ id }).first();
    });
};

function addTask(task) {
    return db('tasks')
    .insert(task, 'id')
    .then(ids => {
        const id = ids[0];

        return db('tasks').where({ id }).first();
    });
};

function removeProject(id) {
    return db ('projects')
    .where({ id })
    .del();
};


function getProjectsById(id){
    return db('projects')
    .where({id})
    .first()
}

function getTasksById(id){
    return db('tasks')
    .where({id})
    .first()
}

function getResourcesById(id){
    return db('resources')
    .where({id})
    .first()
}