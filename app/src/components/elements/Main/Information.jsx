import React from 'react'
import styles from './Main.module.scss'
import Button from '../../UI/Button/Button.jsx'

function Information({movie}) {

	const addToFavorites =(movieName) => {
		let favs = localStorage.getItem('favMovies');
		if(favs){
			favs = JSON.parse(favs);
			localStorage.setItem('favMovies', [...favs, movieName]);
			alert(`${movieName} в избранном`)
		}
		
	}

  return (
	<div className={styles.info}>
		<img src={movie.logo} alt={movie.name} width='200' style={{opacity: .7}}/>
		<div className={styles.additional}>
			<span>{movie.year}</span>
			<span>{movie.limitAge}</span>
			<span>{movie.rating}</span>
			<span>{movie.duration}</span>
		</div>

		<div className={styles.description}>
			{movie.description}
		</div>
		<div className={styles.buttons}>
			<Button cb={()=> console.log('video is open')}>
				<i className="bx bx-play"></i>
				<span>Play</span>
			</Button>
			<Button cb={addToFavorites}>
				<i className="bx bx-play"></i>
				<span>My list</span>
			</Button>
		</div>
	</div>
  )
}

export default Information