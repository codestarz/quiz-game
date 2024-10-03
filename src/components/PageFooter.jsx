import Image from 'next/image'
import playSound from '@/helpers/playSound'
import soundOn from '../assets/sound-on.svg'
import soundOff from '../assets/sound-off.svg'
import { useEffect, useState } from 'react'
import { MdInfo } from 'react-icons/md'
import { GoAlert } from 'react-icons/go'
import { BsFillStarFill } from 'react-icons/bs'

export default function Footer ({ alert = false }) {
	const [sound, setSound] = useState(true)
	const [showInfo, setShowInfo] = useState(false)

	useEffect(() => {
		if (!localStorage.getItem('sound')) localStorage.setItem('sound', sound)
		else setSound(localStorage.getItem('sound') === 'true')
	}, [])

	useEffect(() => localStorage.setItem('sound', sound), [sound])

	function handleClick (info = false) {
		info ? setShowInfo(!showInfo) : setSound(!sound)
		playSound('switch-on')
	}

	function handleSoundON () {
		setSound(true)
		localStorage.setItem('sound', true)
		playSound('switch-on')
	}

	return (
		<footer className='fixed right-4 bottom-3 z-20'>
			
		</footer>
	)
}
