import { IAction, IState, SELECT_ALPHABET } from "../actions/action";

const initialState: IState = {
    selectedAlphabet: "",
    alphabets: [],
    characters: []
};

const memReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case SELECT_ALPHABET:
            localStorage.setItem("selectedAlphabet", action.payload)
            return {
                ...state,
                selectedAlphabet: localStorage.getItem("selectedAlphabet") as string,
            }

        default:
            return state;
    }
};

export default memReducer;
