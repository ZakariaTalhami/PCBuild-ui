import { GET_PART_LIST, SWITCH_PART_SELECTION, ADD_PART, LOADING_PARTS } from "./actionTypes";

const initState = {
    parts: [],
    selection: 'cpu',
    build: {
        cpu: undefined,
        mobo: undefined,
        videocard: undefined,
        memory: undefined,
        storage: undefined
    },
    isLoadingParts: true
} 

export default function(state=initState, action) {
    switch (action.type) {
        case LOADING_PARTS:
            return {
                ...state,
                 isLoadingParts: true
            }
        case GET_PART_LIST:
            return {
                ...state,
                parts: action.payload,
                isLoadingParts: false
            };
        case SWITCH_PART_SELECTION:
            console.log(action.payload);
            return {
                ...state,
                selection: action.payload
            };
        
        case ADD_PART:
            // const build = state.build;
            // build[state.selection] = state.parts[action.payload];
            return {
                ...state,
                build: {
                    ...state.build,
                    [state.selection]: state.parts[action.payload]
                }
            };
        default:
            return state;
    }
}