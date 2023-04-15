export const SearchFn = (datas, query) => {
	console.log(datas)
	let queryLength = query.length
	return datas.filter((data) => {
		console.log(data)
		return (
			data.courseName.slice(0, queryLength).toLowerCase().includes(query.toLowerCase()) ||
			data.description.slice(0, queryLength).toLowerCase().includes(query.toLowerCase())
		)
	})
}
