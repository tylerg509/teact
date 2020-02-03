import { User } from './models/Users';

const user = new User({ id: 1 });

user.set({name: 'Nice NAME', age: 20})

user.save();