let skills = [
    {id: 1234, skill: 'HTML', done: false},
    {id: 1235, skill: 'CSS', done: false},
    {id: 1236, skill: 'Javascript', done: false},
    {id: 1237, skill: 'Python', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update (id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill)
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create (skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
    return skills;
}