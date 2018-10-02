const additem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description:action.description,
          itmurl:action.itmurl,
          status:action.status
        }
      ]

      case 'SET_STATUS':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            status: action.status
          }
        } else {
          return item
        }
      })

    default:
      return state
  }
}

export default additem


