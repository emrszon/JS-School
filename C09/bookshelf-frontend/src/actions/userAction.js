export const UPDATE_DISPLAY = 'user:updateDisplay'
export function updateDisplay(user, display){
    return{
        type: UPDATE_DISPLAY,
        payload: {
            user : {
                search: user.search,
                diplay: display,
                isList: user.isList
            }
        }
    }
}
export const SEARCH = 'user:search'
export function search(user, search){
    return{
        type: SEARCH,
        payload: {
            user : {
                search: search,
                diplay: user.display,
                isList: user.isList
            }
        }
    }
}