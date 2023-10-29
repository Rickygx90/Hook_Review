import { useEffect, useState } from 'react'

export const useFetch = (url, method) => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		console.log('useEffect')
		const getData = async url => {
			try {
				console.log('getData')

				setIsLoading(true)
				setError(null)
				const res = await fetch(url, {
					method,
				})
				if (!res.ok) {
					let objError = new Error()
					objError = {
						err: res.err,
						status: res.status,
						statusText: res.statusText ? res.statusText : 'Error',
					}
					throw objError
				}
				const resData = await res.json()
				setData(resData)
			} catch (error) {
				setError(error)
				setData([])
			}
			setIsLoading(false)
		}
		getData(url)
	}, [url])
	return { isLoading, data, error }
}
