
import {User} from './models/Users'

const user = new User({name: 'myname', age:20})
user.set({name: 'newName', age: 999})
user.set({name: 'Red'})


console.log(user.get('name'));
console.log(user.get('age'))