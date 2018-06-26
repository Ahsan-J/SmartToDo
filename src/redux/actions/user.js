export function AllUsers(users){
    return {
        type:"ALL_USERS",
        data: users,
    }
}
export function deleteUser(user){
    return {
        type : "ALL_USERS",
        data : user,
    }
}
export function registerUser (user){
    return {
        type : "REGISTER_USERS",
        data : user
    }
}
export function SignIn(user){
    return {
        type : "REGISTER_ACTIVE_USER",
        data : user
    }
}