export const SearchFn = (datas, query) => {
	let queryLength = query.length
	return datas.filter((data) => {
		return (
			data.courseName.slice(0, queryLength).toLowerCase().includes(query.toLowerCase()) ||
			data.author.slice(0, queryLength).toLowerCase().includes(query.toLowerCase())
		)
	})
}
