var initialState={
    users:[],
    activeUser : {
        id          :       "SJ0bYHd-Q",
        name        :       "Ahsan",
        email       :       "ahsan.ahmed99@ymail.com",
        avatar      :       "content://media/external/images/media/29540",
        role        :       "user",
        password    :       "U2FsdGVkX19cqbB2V20mONaHX8TUKdB9ugBg5rDGiFU=",
    }
};
export default function(state = initialState,action){
    switch (action.type){
        case "ALL_USERS":
        return state = {
            ...state,
            users : [...action.data]
        };
        case "REGISTER_USERS":
        state.users.push(action.data);
            return state = {
                ...state,
                users : [...state.users]
            }
        case "REGISTER_ACTIVE_USER":
            return state = {
                ...state,
                activeUser : {...action.data}
            }
        default:
            return state;
    }
}