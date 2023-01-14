import React from 'react';
import styles from './menu.module.css';
import { Dropdown } from "../../../../Dropdown";
import { MenuButton } from "./MenuButton";
import { MenuItemsList } from "./MenuItemsList";

type Props = {
	id?: string
	handleIncreasePomodoro: (id?: string) => void
	handleDecreasePomodoro: (id?: string) => void
	handleSetEditTask: (id?: string, isEdit?: boolean) => void
	pomodoroCount: number
}

export function Menu({ handleDecreasePomodoro, handleSetEditTask, handleIncreasePomodoro, id, pomodoroCount }: Props) {
	return (
		<div className={styles.menu}>
			<Dropdown
				top={4}
				right={-370}
				button={<MenuButton />}>
				<div className={styles.dropdown}>
					<MenuItemsList
						id={id}
						handleDecreasePomodoro={handleDecreasePomodoro}
						handleSetEditTask={handleSetEditTask}
						handleIncreasePomodoro={handleIncreasePomodoro}
						pomodoroCount={pomodoroCount} />
				</div>
			</Dropdown>
		</div>
	);
}
