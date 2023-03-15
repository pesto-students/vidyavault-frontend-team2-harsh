import axios from "axios"
import React, { useEffect } from "react"

export const DataFetch = (props) => {
	let url = props.url
	let method = props.method

	// Fetch Data
	useEffect(() => {
		axios
			.get(`${API_URL}/posts`)
			.then((response) => {
				setData(response.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	// Post Data
	const handlePostSubmit = (event) => {
		event.preventDefault()

		axios
			.post(`${API_URL}/posts`, postData)
			.then((response) => {
				setData([...data, response.data])
				setPostData({ title: "", body: "" })
			})
			.catch((error) => {
				console.error(error)
			})
	}

	// Patch Data
	const handleUpdateSubmit = (event) => {
		event.preventDefault()

		axios
			.patch(`${API_URL}/posts/${updateData.id}`, updateData)
			.then((response) => {
				const newData = data.map((item) => {
					if (item.id === response.data.id) {
						return response.data
					} else {
						return item
					}
				})
				setData(newData)
				setUpdateData({ id: "", title: "", body: "" })
			})
			.catch((error) => {
				console.error(error)
			})
	}

	// Delete Data
	const handleDelete = (id) => {
		axios
			.delete(`${API_URL}/posts/${id}`)
			.then(() => {
				const newData = data.filter((item) => item.id !== id)
				setData(newData)
			})
			.catch((error) => {
				console.error(error)
			})
	}
}
