'use strict';
let currentId = 1;

module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          title: 'First test todo',
          description: ' First test todo description',
          status: true
        },
        {
          id: 1,
          title: 'Second test todo',
          description: ' Second test todo description',
          status: true
        },
      ]
    });
  },
  post: (url, data) => {
    return Promise.resolve({
      data: {
        todo: {
          title: data.title,
          status: data.status,
          description: data.description,
          date: data.date,
          id: currentId++
        }
      }
    });
  }
};