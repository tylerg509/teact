import axios, { AxiosPromise } from 'axios';

//without this interface typescript does not know that data: T will contain a property of id
interface HasId{
    id?: number;
}

//must pass type that has an id property
export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      //put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
