
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: 'actions description 1',
          notes: 'actions note1',
          iscomplete: true,
          projectId: 1,
          contextId: 1
        },
        {
          description: 'actions description 2',
          notes: 'actions note2',
          iscomplete: false,
          projectId: 2,
          contextId: 2
        },
        {
          description: 'actions description 3',
          notes: 'actions note3',
          iscomplete: true,
          projectId: 3,
          contextId: 3
        },
      ]);
    });
};
