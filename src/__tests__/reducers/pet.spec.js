import { ADD_PETS } from '../../actions';
import pet from '../../reducers/pet';

const pets = [
  {
    gender: 'Male',
    id: 1,
    name: 'Charlie',
    type: 'Dog',
  },
];

test('should set empty array by default', () => {
  const state = pet(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add pets to state', () => {
  const action = {
    type: ADD_PETS,
    payload: {
      pets,
    },
  };
  const state = pet(undefined, action);
  expect(state).toEqual([...pets]);
});
