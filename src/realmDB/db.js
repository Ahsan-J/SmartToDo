import Realm from 'realm';

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

let realm = new Realm({schema: [userSchema,listSchema],deleteRealmIfMigrationNeeded:true});

export function getRealmInstance(){
    return realm;
}