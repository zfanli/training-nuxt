import { mount } from '@vue/test-utils'
import TestVueComponent from '@/test/test.vue'

describe('BlogHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TestVueComponent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
