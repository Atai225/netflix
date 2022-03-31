import React from 'react'
import styles from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'

const menu = [
	'Popular', 'TV Shows', 'Files', 'My List'
]


function Sidebar({isSidebarShow, setIsSidebarShow}) {

  return (
	<div className={styles.sidebar} style={{width:isSidebarShow ? '15%' : '10%',}}>
		<button onClick={()=> setIsSidebarShow(!isSidebarShow)}>
			<i className={`bx bx-${isSidebarShow ? 'x' : 'border-left'}`}></i>
		</button>
		<ul className={isSidebarShow ? styles.show : ''}>
			{
				menu.map(title => {
					<li key={title}><NavLink className='nav-link' to='/' >{title}</NavLink></li>
				})
			}
		</ul>
	</div>
  )
}

export default Sidebar