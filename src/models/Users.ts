interface UserProps {
  name?: string;
  age?: number;
}

//since this returns nothing use void instead of an empyty object
type Callback = () => void;

export class User {
    //we don't know what they key is so we are just using 'key' as the key of type string
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    //this.data will get overwritten with update data
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    //this.events[eventName] //callback[] or undefined
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers;
  }
  
}
