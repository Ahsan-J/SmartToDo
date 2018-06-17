import Realm from 'realm';
import { dropDownAlert } from '../redux/reduxDropDownAlert';

let userSchema = {
    name : 'User',
    primaryKey : 'id',
    properties : {
        id          :       {type:'string',indexed:true},
        name        :       'string',
        email       :       'string',
        avatar      :       {type:'string',optional:true},
        password    :       'string',
        role        :       {type:'string',default:'user'}
    }
}

let listSchema = {
    name:'ToDo',
    primaryKey :'id',
    properties:{
        id          :       {type:'string',indexed:true},
        task        :       'string',
        createdAt   :       {type:'date',default:new Date()},
        updateAt    :       {type:'date',default:new Date()},
        userId      :       'string',
        notifyMeAt  :       {type:'date',default:new Date()},
        priority    :       'string',
        isDone      :       {type:'bool',default:false},
        sync        :       {type:'bool',default:false},
    }
}

let realm = new Realm({schema: [userSchema],deleteRealmIfMigrationNeeded:true});
// Realm.open({
//     schema: [listSchema,userSchema],
//     deleteRealmIfMigrationNeeded:true
//   }).then(realmIns => {
//     realm = realmIns
//   });
//List Helper
export function getRealmInstance(){
    return realm;
}
export function saveListItem(item){
    try {
        realm.write(() => {
            return realm.create('ToDo', item);
        });
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}
export function updateListItem(item){
    try {
        realm.write(() => {
            return realm.create('ToDo', item, true);
        });
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}
export function deleteListItem(item){
    try {
        realm.write(() => {
            return realm.create('ToDo', item);
        });
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}
export function getAllListItem(){
    try {
        let items = realm.objects('ToDo');
        let itemArray = [];

        for(let item of items){
            itemArray.push(item);
        }

        return itemArray;
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}

export function getItemsByUserId(id){
    try {
        let items = realm.objects('ToDo').filtered('userId = "'+id+'"');
        let itemArray = [];

        for(let item of items){
            itemArray.push(item);
        }

        return itemArray;
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}

//User Helpers
export function registerUser(user){
    try {
        realm.write(() => {
            return realm.create('User', user);
        });
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}
export function updateUser(user){
    try {
        realm.write(() => {
            return realm.create('User', user, true);
        });
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}
export function deleteUser(user){
    try {
        realm.write(() => {
            return realm.create('User', user);
        });
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}
export function getAllUsers(){
    try {

        let usersObject = realm.objects('User');
        let userArray = [];

        for(let user of usersObject){
            userArray.push(user);
        }
        return userArray;
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}
export function getUser(id){
    try {
        return realm.objects('User').filtered('id = "'+id+'"');
    } catch (e) {
        dropDownAlert({
            type:'error',
            title:'Error',
            message:''+e
        })
        console.log("Error on creation",e);
    }
}