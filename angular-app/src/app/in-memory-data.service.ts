import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const friends = [
            {id:1,name:'rohan rao',hobbies:'Badminton, football, basketball, chess', number:2345678987},
            {id:2,name:'rahul reddy',hobbies:'Badminton, football, basketball, chess', number:123456789},
            {id:3,name:'sai krishna' ,hobbies:'Badminton, football, basketball, chess', number:3456789098},
            {id:4,name:'lakshman sai' ,hobbies:'Badminton, football, basketball, chess', number:987654567},
            {id:5,name:'sri lekha' ,hobbies:'Badminton, football, basketball, chess', number:865345677},
        ]

        return {friends};
    }
}