import {Eventing} from './Eventing'
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}
/* 
* @class User
* @property attributes: Attributes
* @property events: Events
* @property sync: Sync
*/
export class User {
  //hard coding eventing because we don't think this will change. Makes it easier for user
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    //this.data will get overwritten with update data
    Object.assign(this.data, update);
  }


}
