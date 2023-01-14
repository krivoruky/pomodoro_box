import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './statisticdropdown.module.css';


export function StatisticDropdown() {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState("Эта неделя")

	const statisticDropdownClass = isOpen ? styles.statisticDropdown + " " + styles.open : styles.statisticDropdown
	const buttonClass = isOpen ? styles.button + " " + styles.up : styles.button

	return (
		<ul className={statisticDropdownClass} onClick={() => setIsOpen(!isOpen)}>
			{!isOpen && (
				<li className={styles.firstItem}>
					<span>{selectedValue}</span>
					<div className={buttonClass}>
						<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2" />
						</svg>
					</div>
				</li>
			)}
			{isOpen && (
				<>
					<Link to="/statistics/week/current/day/Пн">
						<li className={styles.firstItem} onClick={() => setSelectedValue("Эта неделя")}>
							<span>Эта неделя</span>
							<div className={buttonClass}>
								<svg width="16" height="10" viewBox="0 0 16 10" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2" />
								</svg>
							</div>
						</li>
					</Link>
					<div className={styles.divider} />
					<Link to="/statistics/week/last/day/Пн">
						<li onClick={() => setSelectedValue("Прошлая неделя")}><span>Прошлая неделя</span></li>
					</Link>
					<div className={styles.divider} />
					<Link to="/statistics/week/2 weeks ago/day/Пн">
						<li onClick={() => setSelectedValue("2 недели назад")}><span>2 недели назад</span></li>
					</Link>
				</>
			)}
		</ul>
	);
}
