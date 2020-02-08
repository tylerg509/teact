
export class Attributes<T>{
    constructor(private data: T){}
    //K represents a type by convention
    //K can only ever be one of the type of name age or id
    //T is variable for an interface //T is of type k must be name age or id
    //take name age id and look up in interface and return the result
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }
    
    set(update: T): void {
    //this.data will get overwritten with update data
        Object.assign(this.data, update);
    }

    getAll(): T{
        return this.data;
    }
    
}

////example of how you can assign types to keys
//import {UserProps} from './Users'
// const attrs = new Attributes<UserProps>({ 
//     id: 5,
//     age: 20,
//     name: 'asdf'

// })

// const name = attrs.get('name')
// const age = attrs.get('age')
// const id = attrs.get('id')