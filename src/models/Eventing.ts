//since this returns nothing use void instead of an empyty object
type Callback = () => void;

export class Eventing {
  //we don't know what they key is so we are just using 'key' as the key of type string
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    //this.events[eventName] //callback[] or undefined
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    } 

    handlers.forEach(callback => {
      callback();
    });
  }
}
