import React, { useEffect, useState } from 'react';
import styles from './deletemodal.module.css';
import RelativePortal from 'react-relative-portal';
import { useModalRef } from "../hooks/useModalRef";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasks/actions";
import { updateTimer } from "../../store/timer/actions";

export function DeleteModal() {
	const dispatch = useDispatch()
	const id = useParams<{id: string}>();
	const [isMounted, setIsMounted] = useState(false);
	const [ref] = useModalRef(isMounted)

	useEffect(() => {
		setIsMounted(true)
	}, [])


	const handleRemove = () => {
		dispatch(deleteTask(id.id))
		dispatch(updateTimer({
			minutes: 25,
			seconds: 60,
			is_work: false,
			is_break: false,
			is_pause: false,
			time_on_pause: 0,
			task_execution_time: 0,
			increased_time: 0,
			stopping: 0,
		}))
	}

	return (
		<RelativePortal
			component="div"
			className="container"
			top={300}
			right={0}
		>
			<div className={styles.deleteModal} ref={ref}>
				<span className={styles.modalTitle}>Удалить задачу?</span>
				<Link className={styles.modalClose} to="/">
					<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.9115 8.80583L2.84406 13.9567L0.961665 12.0433L6.02911 6.89245L1.0675 1.84914L2.85992 0.0272091L7.82153 5.07052L12.7673 0.0433371L14.6497 1.95672L9.70392 6.9839L14.6655 12.0272L12.8731 13.8491L7.9115 8.80583Z"
							fill="#C4C4C4" />
					</svg>
				</Link>
				<Link to="/" className={styles.deleteButton} onClick={handleRemove}>
					Удалить
				</Link>
				<span className={styles.modalCancel}>
					<Link to="/">Отмена</Link>
				</span>
			</div>
		</RelativePortal>
	)
}
