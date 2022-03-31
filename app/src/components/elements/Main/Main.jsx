import React, { useState } from 'react'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from './Information'
import styles from './Main.module.scss'
import {DATA} from '../../../data.js'
import Navigation from '../../UI/Navigation/Navigation'
import Episode from '../Episode/Episode'


function Main() {
	const [isSidebarShow, setIsSidebarShow] = useState(false)
	const [activeTab, setActiveTab] = useState(false)
  return (
	<div className={styles.wrapper}>
		<Sidebar
		isSidebarShow={isSidebarShow}
		setIsSidebarShow={setIsSidebarShow}
		/>

		<div className={styles.main} style={{backgroundImage: `url(${DATA[0].mainImage})`, width:isSidebarShow ? '85%' : '90%',}}>
			{
				activeTab === 1 ? <Information movie={DATA[0]}/> : activeTab === 2 && <Episode/>
			}
			<Navigation activeTab={activeTab} setActiveTab={setActiveTab }/>
		</div>
	</div>
  )
}

export default Main