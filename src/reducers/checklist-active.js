// 

export default function(state={}, action){
	switch(action.type){
		case "LI_CHECKED":
		return action.checked;
		break;
	};
	return state;
}
