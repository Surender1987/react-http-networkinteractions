import { HttpBase } from "./http-base";

export class ToDoService extends HttpBase {
  static async GetToDo() {
    this.initialize({baseUrl: 'https://jsonplaceholder.typicode.com'});
    return await this.get('/todos');
  }
}