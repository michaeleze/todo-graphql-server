/**
 *  All Service and logics here are originally created by
 *  Michael Eze<michaeleze3@gmail.com>
 *  Please do not reproduce
 */
import {Observable} from './observable';
import { useFetch } from './utility';

class ToDoService extends Observable {
  private static instance: ToDoService;

  constructor() {
    super();
    this.getInstance();
    return ToDoService.instance;
  }

  public async getTaskList() {
    useFetch("/.netlify/functions/graphql", { method: "GET" })
      .then(response => response && response.json())
      .then(response => this.notify(Object.values(response)))
      .catch(err => {
        console.log(err);
      });
  };

  public async createNewTask(task: string) {
    //const uniqueId = Math.floor(Math.random() * 20);
    // const body =  `{\"id\":\"${uniqueId}\",\"text\":\"${task}\"}`;

    // await useFetch('http://localhost:3000/api/tasks', {body, method: 'POST'});
  };

  public async updateTask(id: string, text: string) {
    // const body = `{\"id\":\"${id}\",\"text\":\"${text}\"}`;

  //  useFetch(`http://localhost:3000/api/tasks/${id}`, {body, method: 'PUT'})
  //    .then(response => response && response.json())
  //    .then(response => console.log(Object.values(response)))
  };

  public async deleteTask(id: string, text: string) {
    // const body =  `{\"id\":\"${id}\",\"text\":\"${text}\"}`;

    // await useFetch(`http://localhost:3000/api/tasks/${id}`, {body, method: 'DELETE'});
  };

  private getInstance() {
    if (!ToDoService.instance) {
      ToDoService.instance = this;
    }
  }
}

export const todo = new ToDoService();