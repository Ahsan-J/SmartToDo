export function AllList(list){
    return {
        type:"SET_LIST",
        data : list,
    }
}
export function deleteItem(item){
    return {
        type:"SET_LIST",
        data:item,
    }
}
export function saveItem(item){
    return {
        type:"SAVE_ITEM",
        data:item,
    }
}
export function updateItem(item){
    return {
        type:"UPDATE_ITEM",
        data:item,
    }
}
