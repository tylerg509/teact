import axios, { AxiosResponse } from 'axios';

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    //this.data will get overwritten with update data
    Object.assign(this.data, update);
  }

  async fetch(): Promise<void> {
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/users/${this.get('id')}`
    );
    this.set(response.data);
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      //put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      //post
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
