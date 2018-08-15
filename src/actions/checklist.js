import store from '../store'

export const selectLI = (list) =>{
console.log("you checked list " , list);
return {
	type: "LI_CHECKED",
	checked:list 
}
};