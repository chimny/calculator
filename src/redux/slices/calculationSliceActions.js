// postsConstants.js
const add = '+'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'


export function Calculation(number, operation) {
    return {
        type: 'Calculation',
        payload: { number, operation },
    }
}

// postsReducer.js

const initialState = []

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case
        add: {
            // omit implementation
        }
        default:
            return state
    }
}