
import { observable } from 'mobx'

export class UserAppStore {

     @observable name;
     @observable age;

    constructor() {
        this.name = 'zhangjy';
        this.age = 29;
    }


}