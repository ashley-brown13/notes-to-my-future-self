const LOAD_ONE = 'notes/LOAD_ONE';
const LOAD_ALL = 'notes/LOAD_ALL';
const ADD_ONE = 'notes/ADD_ONE'
const REMOVE_ONE = "notes/REMOVE_ONE";

const loadOne = (note) => {
  return {
    type: LOAD_ONE,
    note: note,
  };
};

const loadAll = (notes) => {
  return {
    type: LOAD_ALL,
    notes: notes,
  }
}

const addNote = (note) => ({
  type: ADD_ONE,
  note: note,
});

const removeNote = (note) => ({
  type: REMOVE_ONE,
  note: note
});

export const addNewNote = (payload) => async dispatch => {
    const response = await fetch(`/api/notes/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF8"
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw response;
    const note = await response.json();
    dispatch(addNote(note));
    return note;
}

export const getNotes = () => async dispatch => {
    const response = await fetch(`/api/notes`);
    if(response.ok) {
      const notes = await response.json();
      dispatch(loadAll(notes))
    }
}

export const getNote = (noteId) => async dispatch => {
    const response = await fetch(`/api/notes/${noteId}`);
    if(response.ok) {
      const note = await response.json();
      dispatch(loadOne(note))
    }
}

export const deleteNote = (noteId) => async (dispatch) => {
    const response = await fetch(`/api/notes/${noteId}/delete`, {
      method: "DELETE",
    });
    if (response.ok) {
      const note = await response.json();
      dispatch(removeNote(note));
      return note;
    }
  };

  function generate(spotifyLink){
    let copy = ""
    let first = spotifyLink.slice(0, 25)
    let second = "embed/"
    let third = spotifyLink.slice(25, 56)
    return copy + first + second + third
  }

const initialState = { note: null, notes: null }

const notesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ONE:
        newState = Object.assign({}, state);
        newState.note = action.note;
        if(newState.note.note.spotifyLink){
            let fixedLink = generate(newState.note.note.spotifyLink)
            newState.note.fixedLink = fixedLink
        }
        return newState
    case LOAD_ALL:
        newState = Object.assign({}, state);
        newState.notes = action.notes;
        return newState
    case ADD_ONE:
        newState = Object.assign({}, state);
        newState.note = action.note;
        return newState
    case REMOVE_ONE:
        return {note: null}
    default:
      return state;
  }
}

export default notesReducer
