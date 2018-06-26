var initialState={
    items:[],
};
export default function(state = initialState,action){
    switch (action.type){
        case "SET_LIST":
            return state = {
                ...state,
                items : [...action.data]
            };
        case "SAVE_ITEM":
            state.items.push(action.data);
            return state = {
                ...state,
                items : [...state.items]
            }
            
        default:
            return state;
    }
}