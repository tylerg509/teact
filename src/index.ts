import { User } from './models/Users';

const user = new User({name: 'new record name', age: 900});

user.events.on('change',() =>{
    console.log('change!');
})

user.events.trigger('change')









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

