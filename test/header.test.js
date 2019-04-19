import { mount } from '@vue/test-utils'
import BlogHeader from '@/components/BlogHeader.vue'

describe('BlogHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BlogHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
