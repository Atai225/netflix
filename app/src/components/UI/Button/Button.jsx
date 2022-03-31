import React from 'react'
import styles from './Button.module.scss'

function Button({children, click}) {
  return (
	<button onClick={click} className={styles.button}>{children}</button>
  )
}

export default Button