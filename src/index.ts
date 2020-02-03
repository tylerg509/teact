
import {User} from './models/Users'

const user = new User({name: 'myname', age:20})
user.set({name: 'newName', age: 999})
user.set({name: 'Red'})

user.on('change', () => {console.log('change 1')})
 
user.on('tylerRocks', ()=>{console.log('change2')})

user.on('save', ()=>{
    console.log('save was triggered')
})


user.trigger('change')
user.trigger('tylerRocks')
user.trigger('save')
user.trigger('aslffasdoiu')