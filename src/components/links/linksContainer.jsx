import React from 'react'
import Links from './../links/links'
import {connect} from 'react-redux'
import {addLink, changeText, changeProtocol, changePort, changeTextPort, changeEndText, changeCurrentEnd} from './../../redux/linksReducer'
class linksContainer extends React.Component{
	componentDidMount(){
		//here should be AJAX request or other actions
	}
	render(){
		return <Links {...this.props}/>
	}
}
const mapStateToProps=(state)=>{
	return{
		links: state.links,
		currentText: state.currentText,
		currentProtocol: state.currentProtocol,
		currentPort: state.currentPort,
		portText: state.portText,
		endText: state.endText,
		currentEnd: state.currentEnd
	}
} 
export default connect(mapStateToProps, {addLink, changeText,changeProtocol, changePort, changeTextPort, changeEndText,changeCurrentEnd})(linksContainer)