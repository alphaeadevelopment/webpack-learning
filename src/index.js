

// courtesy of ProvidePlugin
console.log(_.last([1, 2, 3, 'lodash available globally as _']))

const showTextBtn = document.createElement('button');
showTextBtn.innerText = BUTTON1_TEXT;
showTextBtn.onclick = () => {
  System.import('./displayText').then(module => {
    module.default()
  })
}

const showImgBtn = document.createElement('button');
showImgBtn.innerText = BUTTON2_TEXT;
showImgBtn.onclick = () => {
  System.import('./displayImage').then(module => {
    module.default()
  })
}

const showMdBtn = document.createElement('button');
showMdBtn.innerText = 'Display markdown';
showMdBtn.onclick = () => {
  System.import('./displayMarkdown').then(module => {
    module.default()
  })
}


document.body.appendChild(showTextBtn);
document.body.appendChild(showImgBtn);
document.body.appendChild(showMdBtn);
