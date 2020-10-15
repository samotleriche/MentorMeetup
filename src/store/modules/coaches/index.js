import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'John',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description: 
          'I am John, a real great developer. Come and have a go if you\'re feeling big',
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Shaggy',
          lastName: 'Jinkees',
          areas: ['backend', 'career'],
          description: 
          'I am Shaggy, a real great developer. Come and have a go if you\'re feeling big',
          hourlyRate: 35,
        }
      ]
    }
  },
  mutations,
  getters,
  actions
}