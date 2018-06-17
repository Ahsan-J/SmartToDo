var initialUser={
    Items:[],
};
export default function(state = initialUser,action){
    switch (action.type){
        case "SET_LOCAL_LIST":
            return state = {
                ...state,
                Items : [...action.data]
            };
        default:
            return state;
    }
}