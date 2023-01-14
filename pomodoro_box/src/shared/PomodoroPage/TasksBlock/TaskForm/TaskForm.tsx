import React, { ChangeEvent, FormEvent } from 'react';
import styles from './taskform.module.css';

type Props = {
	value: string,
	error: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void,
	onSubmit: (event: FormEvent) => void;
}

export function TaskForm({ onChange, onSubmit, value, error }: Props) {
	return (
		<form className={styles.taskForm} onSubmit={onSubmit}>
			<input type="text"
				className={styles.input}
				placeholder="Название задачи"
				onChange={onChange}
				value={value}
			/>
			<button type="submit" className={styles.button} >
				Добавить
			</button>
			{error && <p className={styles.error}>{error}</p>}
		</form>
	);
}
