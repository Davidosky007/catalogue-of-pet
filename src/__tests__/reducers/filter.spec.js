import { FILTER_GENDER, FILTER_SIZE, FILTER_PETS } from '../../actions';
import filter from '../../reducers/filter';

let defaultState;

beforeEach(() => {
  defaultState = 'All';
});
test('should return filterReducer', () => {
  const state = filter(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});

test('should set breed with given string', () => {
  const breed = 'Dog';
  const action = {
    type: FILTER_PETS,
    payload: {
      breed,
    },
  };
  const state = filter(undefined, action);
  expect(state.breed).toEqual(breed);
});

test('should set size with given string', () => {
  const size = 'Small';
  const action = {
    type: FILTER_SIZE,
    payload: {
      size,
    },
  };
  const state = filter(undefined, action);
  expect(state.size).toEqual(size);
});

test('should set gender with given string', () => {
  const gender = 'Small';
  const action = {
    type: FILTER_GENDER,
    payload: {
      gender,
    },
  };
  const state = filter(undefined, action);
  expect(state.gender).toEqual(gender);
});
