const INITIAL_STATE = { description: '', list: [] }

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.playload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.playload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}

export default todoReducer