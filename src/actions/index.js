let nextTodoId = 0 

export const addItem = (title,description,itemStstus) => (

{
  type: 'ADD_ITEM',
  id:title.replace(/\s/g,'_') + nextTodoId++,
  itmurl:title.replace(/\s/g,'_'),
  title,
  description,
  itemStstus:["on-progress","on-hold","done"]
})


