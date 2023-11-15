function searchInArray(list, searchField, searchValue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const results = list.filter(item => item[searchField] == searchValue)
  
        if (results.length > 0) {
          resolve(results)
        } else {
          reject(`За пошуком по ${searchField}: ${searchValue} не знайдено.`)
        }
      }, 1000)
    })
}
// searchInArray(array, 'name', 'Kris').then(results => {
//     console.log('Результати пошуку:', results)
//   })
//   .catch(error => {
//     console.log(error)
//   })
export default searchInArray