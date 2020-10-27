export const LOAD_INDEX = 'LOAD_INDEX';
const loadIndex = (index) => ({
    type: LOAD_INDEX,
    data: index
}) 

export const RESET_INDEX = 'RESET_INDEX';
const resetIndex = () => ({
    type: RESET_INDEX,
    data: null
})



export const doLoad = (index, dispatch) => {
    const action = loadIndex(index);
    dispatch(action);
}

export const resetID = (dispatch) => {
    const action = resetIndex();
    dispatch(action)
}