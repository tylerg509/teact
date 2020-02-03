import { User } from './models/Users';

const user = new User({name: 'new record name', age: 900});

user.save()