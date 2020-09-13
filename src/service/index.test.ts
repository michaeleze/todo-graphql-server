import { todo } from './index';

const state = [
  {1: {id: 1, text: 'hello world'}},
  {2: {id: 45, text: 'dummy text'}},
  {3: {id: 13, text: 'mock data'}}
];

describe('ToDoService', () => {
  const mockedFetch = jest.fn(fetch);
  const spy = jest.spyOn(todo, 'getTaskList');

  describe('getTaskList', () => {
    beforeEach(() => {
      mockedFetch.mockResolvedValue(state as any);
    });

    it('Gets list of task', async () => {
      expect(spy).resolves.toBe(state);
    })
  });

  it('calls mock', () => {
    const spy = jest.spyOn(todo, 'getTaskList');

    return todo.getTaskList().then((d) => d.json()).then((d) => {

      expect(d).toEqual({
        id: 'id',
        text: 'text'
      })
    })
  });

  it('calls mock', () => {
    const spy = jest.spyOn(todo, 'createNewTask');

    todo.createNewTask('hello world');

    expect(spy).toBeCalledWith('hello world')
  });
});