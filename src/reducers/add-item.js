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

      case 'ITEM_STATUS':
      return [
        ...state,
        {
          status:action.status
        }
      ]

    default:
      return state
  }
}

export default additem


