import { useRef, useEffect } from "react";
import { useNavigate} from 'react-router-dom';

export function useModalRef(isMounted: boolean) {
	const ref = useRef<HTMLDivElement>(null)
	const navigate = useNavigate();

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (event.target instanceof Node && !ref.current?.contains(event.target)) {
				if (isMounted) {
					navigate('/')
				}
			}
		}

		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [navigate, isMounted])

	return [ref]
}