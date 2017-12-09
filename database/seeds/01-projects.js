
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'project1',
          description: 'description1',
          iscomplete: true,
          actionId: 1
        },
        {
          name: 'project2',
          description: 'description2',
          iscomplete: false,
          actionId: 2
        },
        {
          name: 'project3',
          description: 'description3',
          iscomplete: true,
          actionId: 3
        },
        {
          name: 'project4',
          description: 'description4',
          iscomplete: false,
          actionId: 1
        },
        {
          name: 'project5',
          description: 'description5',
          iscomplete: true,
          actionId: 2
        },
      ]);
    });
};
