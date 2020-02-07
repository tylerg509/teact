import { User } from './models/Users';

const user = new User({ name: 'new record name', age: 900 });

console.log(user.get('name'));

user.on('change', ()=>{
    console.log(' user was changed')
})


user.set({name: 'New name'})

// user.attributes.get('id')
// user.attributes.get('name')
// user.attributes.get('age')

// user.sync.save();

// //example of how a string can be a type
// type BestName = 'stephen';

// //if name is of type string it prints
// const printName = (name: string): void =>{}
// printName('ad;lkjsfd');

// const printNameBestName = (name: BestName): void =>{}
// //stephen is successful
// printNameBestName('ad;lkjsfd')
// ////other work will not print
// printNameBestName('stephen')
