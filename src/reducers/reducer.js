const initState = [];

export const reducer = (state = initState , action) => {
    switch(action.type){
        case "add" : return action.payload;

        default : return state;
    }

    

    return state;
}