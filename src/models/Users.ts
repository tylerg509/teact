import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
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

const rootUrl = 'http://localhost:3000/users';

export class User {
  //hard coding eventing because we don't think this will change. Makes it easier for user
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes< UserProps>(attrs);
  }

  // on(eventName: string, callback: Callback): void{
  //   this.events.on(eventName, callback)
  // }

  get on(){
    return this.events.on
  }

  get trigger(){
    return this.events.trigger;
  }

  get get(){
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

}
