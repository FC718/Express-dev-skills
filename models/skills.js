const skills = [
    {id: 125223, skills: 'Learn HTML & CSS', done: true},
    {id: 127904, skills: 'Learn JavaScript', done: false},
    {id: 139608, skills: 'Apply for jobs', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id)
  }

  function getAll() {
    return skills;
  }