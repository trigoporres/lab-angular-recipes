import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class IngredientsService {

  BASE_URL: string = 'http://localhost:3000';
    constructor(private http: Http) {}


 ingredients: object = [
  { name: "kosher salt", },
  { name: "bay leaves" },
  { name: "brown lentils" },
  { name: "parsnips" },
  { name: "sherry vinegar" },
  { name: "baking potatoes" },
  { name: "olive oil" },
  { name: "shallots" },
  { name: "carrots" },
  { name: "fat free less sodium chicken broth" },
  { name: "ground black pepper" },
  { name: "chopped celery" },
  { name: "arborio rice" },
  { name: "olive oil" },
  { name: "dry white wine" },
  { name: "brown butter" },
  { name: "grated parmesan cheese" },
  { name: "vegetable stock" },
]

getList() {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
    .map((res) => res.json());
}
}
