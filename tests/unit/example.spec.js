import './localStorage.js'
import '../../src/main'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '../../src/ui/main/LoginPage.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).to.include(msg)
//   })
// })
describe('App.vue', () => {
  it('renders div contains', () => {
    const div = '<div id="styled_video_container" class="styled_video_container">'
    const wrapper = shallowMount(App)
    expect(wrapper.html()).to.include(div)
  })
})
