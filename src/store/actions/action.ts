export const SELECT_ALPHABET = "SELECT_ALPHABET"
export const ADD_ALPHABET = "ADD_ALPHABET"
export const EDIT_ALPHABET = "EDIT_ALPHABET"
export const DELETE_ALPHABET = "DELETE_ALPHABET"
export const ADD_CHAR = "ADD_CHAR"
export const EDIT_CHAR = "EDIT_CHAR"
export const DELETE_CHAR = "DELETE_CHAR"

export interface ICharacter {
    originalChar: string,
    englishChar: string,
    alphabet: string,
}
export interface IState {
    selectedAlphabet: string,
    alphabets: string[],
    characters: ICharacter[]
}
export interface IReducedState {
    mem: IState
}
export interface IAction {
    type: string,
    payload: any
}

export const SelectAlphabet = (alphabet: string) => {
    return {
        type: SELECT_ALPHABET,
        payload: alphabet,
    };
};

export const AddAlphabet = (alphabet: string) => {
    return {
        type: ADD_ALPHABET,
        payload: alphabet,
    };
};

export const AddCharacter = (char: ICharacter) => {
    return {
        type: ADD_CHAR,
        payload: char,
    };
};
