import { ref, onMounted, onUnmounted } from 'vue'
import { useEventListener } from './Composables-child2.js'

export function useMouse() {
  let x = ref(0)
  let y = ref(0)

  // function update(event) {
  //   x.value = event.pageX
  //   y.value = event.pageY
  // }

  // onMounted(() => window.addEventListener('mousemove', update))
  // onUnmounted(() => window.removeEventListener('mousemove', update))

  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}

