const skills = [
    {id: 125223, skill: 'Learn HTML & CSS', done: true},
    {id: 127904, skill: 'Learn JavaScript', done: false},
    {id: 139608, skill: 'Apply for jobs', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne

  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id)
  }

  function getAll() {
    return skills;
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne() {
    id = parseInt(id);
    const idx = todos.findIndex(todo => todo.id === id);
  todos.splice(idx, 1);
  }