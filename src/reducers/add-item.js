const additem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        }
      ]
    
    default:
      return state
  }
}

export default additem


