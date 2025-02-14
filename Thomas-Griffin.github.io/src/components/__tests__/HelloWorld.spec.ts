import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LinkButton from '@/components/LinkButton.vue'
import UsernameHeader from '@/components/UsernameHeader.vue'


describe('LinkButton', () => {
  it('renders GitHub link properly', () => {
    const wrapper = mount(LinkButton, {
      props: {
        text: 'GitHub',
        websiteLink: 'https://github.com/',
        imageFile: 'github-icon.svg',
        username: 'thomas-griffin'
      }
    })
    expect(wrapper.text()).toContain('GitHub')
  })
})

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = mount(UsernameHeader, { props: {username:"Test Header Username"} })
    expect(wrapper.text()).toContain('Test Header Username')
  })
})

describe('Footer', () => {
  it('renders properly', () => {
    const wrapper = mount(UsernameHeader, { props: { username: 'Test Footer Username' } })
    expect(wrapper.text()).toContain('Test Footer Username')
  })
})
