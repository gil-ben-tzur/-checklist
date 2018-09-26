let nextTodoId = 0
export const addItem = text => ({
  type: 'ADD_ITEM',
  id: nextTodoId++,
  text
})
