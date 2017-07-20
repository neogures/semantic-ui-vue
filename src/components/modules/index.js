import Dimmer from './dimmer'
import Modal from './modal'
import Checkbox from './checkbox'
import Accordion from './accordion'
import Progress from './progress'

export default {
  install(Vue) {
    Vue.use(Dimmer)
    Vue.use(Modal)
    Vue.use(Checkbox)
    Vue.use(Accordion)
    Vue.use(Progress)
  }
}
