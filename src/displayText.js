import camelCase from 'lodash/camelCase'

export default () => {
  System.import('./style.scss').then((styles) => {
    const p = document.createElement('p')
    p.innerText = camelCase('HELLO_WORLD')
    p.className = styles.text
    document.body.appendChild(p)
  })
}
