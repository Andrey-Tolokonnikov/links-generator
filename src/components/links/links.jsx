import React from 'react'
import style from './links.module.css'
let links =(props)=>{
	return(
	<div>
		<div className={style.btn__wrapper}> 
		<div>
			<button onClick={()=>{props.changeProtocol('http')}} className={`${style.btn} ${props.currentProtocol=='http'?style.active:''}`}>http</button>
			<button onClick={()=>{props.changeProtocol('https')}} className={`${style.btn} ${props.currentProtocol=='https'?style.active:''}`}>https</button>
		</div>
		<div>
			<input type="number" min='0' placeholder="Enter the port" value={props.portText} onChange={(e)=>{props.changeTextPort(e.target.value)}}/>
			<button onClick={()=>{props.changePort()}} className={style.btn}>set</button>
		</div>
		<div>
			<input type="text" placeholder="Ending of link" value={props.endText} onChange={(e)=>{props.changeEndText(e.target.value)}}/>
			<button onClick={()=>{props.changeCurrentEnd()}} className={style.btn}>set</button>
		</div>
		</div>
		<div className={style.table}>
			<div className={style.section}>Contour Name</div>
			<div className={style.section}>Links</div>
			<div className={style.section}></div>
			<div className={style.section}>Old Front</div>
			{props.links.map(item=>{
				return(
				<>
					<div className={style.section}>{item.name}</div>
					<div className={style.section}><a href={item.address} target='_blank'>{item.address}</a></div>
				</>
				)
			})}
		</div>
	
	<input placeholder="Enter the name of contour" type="text" onChange={(e)=>{props.changeText(e.target.value)}} value={props.currentText}/>
	<button onClick={()=> {props.addLink(props.currentText, `${props.currentProtocol}://${props.currentText}:${props.currentPort+props.currentEnd}`)}}>Add Link</button>
	</div>
		)
}
export default links
