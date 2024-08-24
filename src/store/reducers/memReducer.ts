import { ADD_ALPHABET, ADD_CHAR, IAction, IState, SELECT_ALPHABET } from "../actions/action";

const initialState: IState = {
    selectedAlphabet: "",
    alphabets: [],
    characters: []
};

const memReducer = (state = initialState, action: IAction) => {
    console.log(action.type)
    switch (action.type) {
        case SELECT_ALPHABET:
            return {
                ...state,
                selectedAlphabet: action.payload,
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
        case ADD_CHAR:
            
            let charsCpy = state.characters.slice()            
            charsCpy.push(action.payload)

            let charsCopyForStorage = JSON.stringify(charsCpy)
            localStorage.setItem("characters", charsCopyForStorage)
            return {
                ...state,
                characters: charsCpy,
            }
        default:
            let storedAlphabets = localStorage.getItem("alphabets")
            let alphabets = []
            if(storedAlphabets !== null) {
                alphabets = JSON.parse(storedAlphabets)
            }

            let storedCharacters = localStorage.getItem("characters")
            let characters = []
            if(storedCharacters !== null) {
                characters = JSON.parse(storedCharacters)
            }
            return {
                ...state,
                alphabets: alphabets,
                characters: characters,
            }
    }
};

export default memReducer;
