import { ADD_ALPHABET, IAction, IState, SELECT_ALPHABET } from "../actions/action";

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
                selectedAlphabet: localStorage.getItem("selectedAlphabet")!,
            }
        case ADD_ALPHABET:
            let alphabetsCopy = state.alphabets.slice()
            alphabetsCopy.push(action.payload)

            let alphabetsCopyForStorage = JSON.stringify(alphabetsCopy)
            localStorage.setItem("alphabets", alphabetsCopyForStorage)
            return {
                ...state,
                alphabets: alphabetsCopy,
            }
        default:
            let storedAlphabets = localStorage.getItem("alphabets")
            let alphabets = []
            if(storedAlphabets !== null) {
                alphabets = JSON.parse(storedAlphabets)
            }
            return {
                ...state,
                alphabets: alphabets,
            }
    }
};

export default memReducer;
