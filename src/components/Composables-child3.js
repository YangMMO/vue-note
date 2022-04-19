import { ref, isRef, unref, watchEffect } from 'vue'

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

export function useFetch1(url) {
  const data1 = ref(null)
  const error1 = ref(null)

  async function doFetch(){
    data1.value = null
    error1.value = null

    // 组合式函数在接收 ref 为参数时会产生响应式 effect，请确保使用 watch() 显式地监听此 ref，或者在 watchEffect() 中调用 unref() 来进行正确的追踪
    const urlValue = unref(url)

    try {
      await timeout()

    	const res = await fetch(urlValue)
	    data1.value = await res.json()
    
    } catch (e) {
      error1.value = e
    }
  }

  if(isRef(url)) {
    watchEffect(() => {
      doFetch()
      // console.log(url)
    })
  } else {
    doFetch()
    // console.log(2);
  }

  return { data1, error1, retry: doFetch }
  
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve()
      } else {
        reject(new Error('Random Error'))
      }
    }, 300)
  })
}