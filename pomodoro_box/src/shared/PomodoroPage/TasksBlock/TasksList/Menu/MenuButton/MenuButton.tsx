import React from 'react';
import styles from './menubutton.module.css';
import { MenuIcon } from "../../../../../Icons";

export function MenuButton() {
	return (
		<div className={styles.menuButton}>
			<MenuIcon />
		</div>
	);
}
