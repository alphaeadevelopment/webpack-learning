import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'

export default () => {
  appendImage(image1)
  appendImage(image2)
}


const appendImage = (src) => {

  const i = document.createElement('img')
  i.src = src
  const p = document.createElement('p')
  p.innerText = `Image source: ${src}`
  document.body.appendChild(i)
  document.body.appendChild(p)
}
