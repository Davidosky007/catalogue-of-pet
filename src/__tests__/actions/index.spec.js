import {
  addPets, filterPets, filterGender, filterSize, ADD_PETS, FILTER_PETS, FILTER_GENDER, FILTER_SIZE,
} from '../../actions';

const pets = [
  {
    id: 1,
    type: 'Cat',
    name: 'Bingo',
    gender: 'male',
  },
  {
    id: 2,
    type: 'Cat',
    name: 'sandra',
    gender: 'female',
  },
];

test('should return addPets action', () => {
  const action = addPets(pets);
  expect(action).toEqual({
    type: ADD_PETS,
    payload: {
      pets,
    },
  });
});

test('should return filter pets action', () => {
  const breed = 'Bull';
  const action = filterPets(breed);
  expect(action).toEqual({
    type: FILTER_PETS,
    payload: {
      breed,
    },
  });
},

test('should return filter gender action ', () => {
  const gender = 'male';
  const action = filterGender(gender);
  expect(action).toEqual({
    type: FILTER_GENDER,
    payload: {
      gender,
    },
  });
}),

test('should return filter size action', () => {
  const size = 'medium';
  const action = filterSize(size);
  expect(action).toEqual({
    type: FILTER_SIZE,
    payload: {
      size,
    },
  });
}));
