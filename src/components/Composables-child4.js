import { ref } from 'vue'


export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Network response was not ok.')
      }
    }).then(json => {
      data.value = json
    }).catch(e => {
      error.value = e
    })


  return { data, error }
  
}