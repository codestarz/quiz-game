import { useEffect, useState } from 'react'

export default function Footer () {
	const [sound, setSound] = useState(true)

	useEffect(() => {
		if (!localStorage.getItem('sound')) localStorage.setItem('sound', sound)
		else setSound(localStorage.getItem('sound') === 'true')
	}, [])

	useEffect(() => localStorage.setItem('sound', sound), [sound])

	return (
		<footer className='fixed right-4 bottom-3 z-20'>
		</footer>
	)
}
