import React, { ChangeEvent, FormEvent, useState } from 'react';
import { editTask, setEditTask } from "../../../../../store/tasks/actions";
import { useDispatch } from "react-redux";
import styles from './taskeditform.module.css'
import { validateForm } from "../../../../../utils/validateForm";

type Props = {
	id?: string
	title: string
}

export function TaskEditForm({ title, id }: Props) {
	const dispatch = useDispatch()

	const [value, setValue] = useState(title)
	const [error, setError] = useState("")

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value)
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (!validateForm(value).isValid) {
			setError(validateForm(value).message)
		} else {
			setError("")
			dispatch(editTask({ id: id, title: value }))
			dispatch(setEditTask({ id: id, isEdit: false }))
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.taskEditForm}>
			<input type="text" value={value} onChange={handleChange} />
			<button type="submit" className={styles.button}>
				Сохранить
			</button>
			<span className={styles.error}>{error}</span>
		</form>
	);
}
