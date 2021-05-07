const LOAD_ONE = 'tags/LOAD_ONE';
const LOAD_ALL = 'tags/LOAD_ALL';
const ADD_ONE = 'tags/ADD_ONE'
const REMOVE_ONE = "tags/REMOVE_ONE";

const loadOne = (tag) => {
  return {
    type: LOAD_ONE,
    tag: tag,
  };
};

const loadAll = (tags) => {
  return {
    type: LOAD_ALL,
    tags: tags,
  }
}

const addTag = (tag) => ({
  type: ADD_ONE,
  tag: tag,
});

const removeTag = (tag) => ({
  type: REMOVE_ONE,
  tag: tag
});

export const addNewTag = (payload) => async dispatch => {
    const response = await fetch(`/api/tags/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF8"
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw response;
    const tag = await response.json();
    dispatch(addTag(tag));
    return tag;
}

export const getTags = () => async dispatch => {
    const response = await fetch(`/api/tags`);
    if(response.ok) {
      const tags = await response.json();
      dispatch(loadAll(tags))
    }
}

export const deleteTag = (tagId) => async (dispatch) => {
    const response = await fetch(`/api/tags/${tagId}/delete`, {
      method: "DELETE",
    });
    if (response.ok) {
      const tag = await response.json();
      dispatch(removeTag(tag));
      return tag;
    }
  };

const initialState = { tag: null, tags: null }

const tagsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ONE:
        newState = Object.assign({}, state);
        newState.tag = action.tag;
        return newState
    case LOAD_ALL:
        newState = Object.assign({}, state);
        newState.tags = action.tags;
        return newState
    case ADD_ONE:
        newState = Object.assign({}, state);
        newState.tag = action.tag;
        return newState
    case REMOVE_ONE:
        return {tag: null}
    default:
      return state;
  }
}

export default tagsReducer
