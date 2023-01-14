import React from 'react';
import styles from './insruction.module.css';

export function Instruction() {
	return (
		<div className={styles.instruction}>
			<div className={styles.instructionTitle}>
				Ура! Теперь можно начать работать:
			</div>
			<ul className={styles.instructionList}>
				<li><span>Выберите категорию и напишите название текущей задачи</span></li>
				<li><span>Запустите таймер («помидор»)</span></li>
				<li><span>Работайте пока «помидор» не прозвонит</span></li>
				<li><span>Сделайте короткий перерыв (3-5 минут)</span></li>
				<li>
					<span>
						Продолжайте работать «помидор» за «помидором», пока задача <br /> не будут выполнена. Каждые 4 «помидора» делайте длинный <br />перерыв (15-30 минут).
					</span>
				</li>
			</ul>
		</div>
	);
}
