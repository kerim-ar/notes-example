import styles from './Preloader.module.css'

function Preloader() {
	return (
		<span className={styles.loader}></span>
	)
}

function PreloaderContainer() {
	return (
		<div className={styles.container}>
			<Preloader/>
		</div>
	)
}

export {
	PreloaderContainer,
}