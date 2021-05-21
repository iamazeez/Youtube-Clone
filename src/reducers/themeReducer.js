const initState = false;

export const changeTheme = (state = initState , action) => {
    switch(action.type){
        case "change-theme" : return action.payload;
        default : return state;
    }
}