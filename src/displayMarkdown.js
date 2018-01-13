import camelCase from 'lodash/camelCase'
import markdown from './markdown.md'

export default () => {
  const div = document.createElement('div')
  div.innerHTML = markdown
  document.body.appendChild(div)
}
