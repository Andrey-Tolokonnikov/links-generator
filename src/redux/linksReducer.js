let initialState={
	links:[],
	currentText: '',
	currentProtocol: 'http',
	currentPort: '0000',
	portText: '0000',
	endText: '',
	currentEnd: '',
}
const linksReducer=(state=initialState, action)=>{
	switch(action.type){
		case 'ADD-LINK':
			return state.currentText?{...state,currentText: '', links: [...state.links, {name: action.linkName, address: action.linkAddress}]}:state
		case 'CHANGE-AREA-TEXT':
			return {...state, currentText: action.text}
		case 'CHANGE-PROTOCOL':
			return {...state, currentProtocol: action.prot}
		case 'CHANGE-PORT':
			return {...state, currentPort: state.portText}
		case 'CHANGE-TEXT-PORT':
			return {...state, portText: action.text}
		case 'CHANGE-END-TEXT':
			return {...state, endText: action.text}
		case 'CHANGE-CURRENT-END':
			return {...state, currentEnd: state.endText}
		default:			
			return state
	}
}
export const addLink = (Name, Address)=>({type: 'ADD-LINK', linkName: Name, linkAddress: Address})
export const changeText = newText=>({type: 'CHANGE-AREA-TEXT', text: newText})
export const changeProtocol = text=>({type: 'CHANGE-PROTOCOL', prot: text})
export const changePort = ()=>({type: 'CHANGE-PORT'})
export const changeTextPort = number=>({type: 'CHANGE-TEXT-PORT', text: number})
export const changeEndText = text=>({type: 'CHANGE-END-TEXT', text: text})
export const changeCurrentEnd = ()=>({type: 'CHANGE-CURRENT-END'})
export default linksReducer