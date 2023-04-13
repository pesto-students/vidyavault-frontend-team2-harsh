import axios from "axios"
import { BACKEND_URL } from "../../Constant"

// Fetch Data
export function getData(url) {
	axios
		.get(`${BACKEND_URL}/${url}`)
		.then((response) => {
			return response
		})
		.catch((error) => {
			return error
		})
}

// Post Data
export async function postData(url, postData, header = null) {
	let response = await axios.post(`${BACKEND_URL}/${url}`, postData, header)
	return response;
}

export async function patchData(url, patchData, header = null) {
	let response = await axios.patch(`${BACKEND_URL}/${url}`, patchData, header)
	return response
}

// Patch Data
// 	const handleUpdateSubmit = (event) => {
// 		event.preventDefault()

// 		axios
// 			.patch(`${API_URL}/posts/${updateData.id}`, updateData)
// 			.then((response) => {
// 				const newData = data.map((item) => {
// 					if (item.id === response.data.id) {
// 						return response.data
// 					} else {
// 						return item
// 					}
// 				})
// 				setData(newData)
// 				setUpdateData({ id: "", title: "", body: "" })
// 			})
// 			.catch((error) => {
// 				console.error(error)
// 			})
// 	}

// 	// Delete Data
// 	const handleDelete = (id) => {
// 		axios
// 			.delete(`${API_URL}/posts/${id}`)
// 			.then(() => {
// 				const newData = data.filter((item) => item.id !== id)
// 				setData(newData)
// 			})
// 			.catch((error) => {
// 				console.error(error)
// 			})
// 	}
// }
