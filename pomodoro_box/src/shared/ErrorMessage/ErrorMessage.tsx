import React from 'react';
import styles from './errormessage.module.css';

type Props = {
	errorMessage: string
}

export function ErrorMessage({ errorMessage }: Props) {
	return (
		<h2 className={styles.message}>{errorMessage}</h2>
	);
}
