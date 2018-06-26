import { AllList, deleteItem as remove, saveItem as save, updateItem as update } from '../redux/actions/list.js'
import { dropDownAlert } from '../config/dropDownAlert';
import { getRealmInstance } from './db'

export function saveListItem(item){
    return dispatch =>{
        let realm = getRealmInstance();
        try {
            realm.write(() => {
                dispatch(save(realm.create('ToDo', item)));
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
export function updateListItem(item){
    return dispatch =>{
        let realm = getRealmInstance();
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
}
export function deleteListItem(item){
    return dispatch =>{
        let realm = getRealmInstance();
        try {
            realm.write(() => {
                realm.delete(item);
                dispatch(remove(realm.objects('ToDo')));
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
export function getAllListItem(userId){
    return dispatch =>{
        let realm = getRealmInstance();
        try {
            let items = realm.objects('ToDo').filtered('userId = "'+userId+'"');
            let itemArray = [];

            for(let item of items){
                itemArray.push(item);
            }

            dispatch(AllList(itemArray));
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

export function getItemsByUserId(id){
    return dispatch =>{
        let realm = getRealmInstance();
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
}