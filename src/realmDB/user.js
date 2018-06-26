import { AllUsers, deleteUser as remove, registerUser as register } from '../redux/actions/user.js'
import { dropDownAlert } from '../config/dropDownAlert';
import { getRealmInstance } from './db'

export function registerUser(user){
    return dispatch =>{
        let realm = getRealmInstance();
        try {
            realm.write(() => {
                dispatch(register(realm.create('User', user)))
            });
            dropDownAlert({
                type:'success',
                title:'Welcome '+user.name,
                message:'Feel free to use our App'
            })
        } catch (e) {
            dropDownAlert({
                type:'error',
                title:'Error',
                message:''+e
            })
            console.log("Error on creation",e);
        }
    }
}
export function updateUser(user){
    return dispatch =>{
        let realm = getRealmInstance();
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
}
export function deleteUser(user){
    return dispatch =>{
        let realm = getRealmInstance();
        try {
            realm.write(() => {
                realm.delete(user);
                dispatch(remove(realm.objects('User')));
                dropDownAlert({
                    type:'success',
                    title:'Successfully Removed',
                    message:"The Account\'s credentials will be completely removed"
                })
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
}
export function getAllUsers(){
    return dispatch =>{
        let realm = getRealmInstance();
        try {
    
            let usersObject = realm.objects('User');
            let userArray = [];
    
            for(let user of usersObject){
                userArray.push(user);
            }
            console.log(userArray);
            dispatch(AllUsers(userArray));
        } catch (e) {
            dropDownAlert({
                type:'error',
                title:'Error',
                message:''+e
            })
            console.log("Error on creation",e);
        }   
    }
}
export function getUser(id){
    return dispatch =>{
        let realm = getRealmInstance();
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
}