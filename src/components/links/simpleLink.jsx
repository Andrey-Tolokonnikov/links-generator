import React from 'react'

const SimpleLink = ({item, style, setEditable})=>{
	return(
		<React.Fragment key={item.id}>
			<div className={style.section}>{item.name}</div>
			<div className={style.section}>
				<a href={item.address} target='_blank' rel="noreferrer noopener">{item.address}</a>
				<div className={style.control}>
					<i className={`far fa-edit ${style.editBtn}`} onClick={()=>setEditable({id:item.id, text: item.address})}></i>
				</div>
			</div>
		</React.Fragment>
		)
}
export default SimpleLink