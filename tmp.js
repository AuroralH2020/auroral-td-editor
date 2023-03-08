const hide = 'display: none'
const show = 'display: block'

const items = [
  {
    title: 'Blog',
    href: 'https://github.com/AuroralH2020/auroral-node/wiki',
    description: 'installation, examples...',
  },
  {
    title: 'Wiki',
    href: 'https://github.com/AuroralH2020/auroral-node/wiki',
    description: 'Technical documentation',
  },
]

window.onclick = clickOutside

const button = document.createElement('div')
button.id = '_auroral-doc-button'
button.onclick = open
button.style = show

const panel = document.createElement('div')
panel.id = '_auroral-doc-panel'
panel.style = hide
panel.onclick = stopPropagation

const panelHeader = document.createElement('div')
panelHeader.id = '_auroral-doc-panel-header'

const panelClose = document.createElement('div')
panelClose.id = '_auroral-doc-panel-close'
panelClose.innerHTML = '&#x2715'
panelClose.onclick = close

const panelTitle = document.createElement('div')
panelTitle.id = '_auroral-doc-panel-title'
panelTitle.innerHTML = 'Auroral Documentation'

panelHeader.append(panelTitle)
panelHeader.append(panelClose)

const content = document.createElement('div')
content.id = '_auroral-doc-panel-content'

items.forEach((element) => {
  const a = document.createElement('a')
  a.target = '_blank'
  a.href = element.href
  content.append(a)

  const item = document.createElement('div')
  item.className = '_auroral-doc-panel-content-item'
  a.append(item)

  const title = document.createElement('div')
  title.className = '_auroral-doc-panel-content-title'
  title.innerHTML = element.title
  item.append(title)

  const description = document.createElement('div')
  description.className = '_auroral-doc-panel-content-description'
  description.innerHTML = element.description
  item.append(description)
})

const iconContrib = document.createElement('div')
iconContrib.id = '_auroral-doc-panel-contrib'
iconContrib.innerHTML =
  '<a target="_blank" href="https://icons8.com/icon/xZb3XsJN26va/book-information">Book Information</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'

panel.append(panelHeader)
panel.append(content)
panel.append(iconContrib)

window.addEventListener(
  'DOMContentLoaded',
  function () {
    console.log('here')
    document.body.append(button)
    document.body.append(panel)
    loadStyles()
  },
  false
)

function open(event) {
  button.style = hide
  panel.style = show
  event.stopPropagation()
}

function close(event) {
  button.style = show
  panel.style = hide
  event.stopPropagation()
}

function clickOutside() {
  button.style = show
  panel.style = hide
}

function stopPropagation(event) {
  event.stopPropagation()
}

function loadStyles() {
  const style = `<style>
  #_auroral-doc-button {
    width: 64px !important;
    height: 64px !important;
    background-color: white !important;
    position: fixed !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 1000 !important;
    border-radius: 1000px 0px 0px 0px !important;
    -webkit-box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75) !important;
    -moz-box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75) !important;
    box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75) !important;
  }
  
  #_auroral-doc-button::after {
    content: '' !important;
    position: absolute !important;
    bottom: 16 !important;
    right: 12 !important;
    background-image: url('https://cdn.jsdelivr.net/gh/KokolM/auroral-doc/icon-48.png') !important;
    width: 48px !important;
    height: 48px !important;
  }
  
  #_auroral-doc-button:hover {
    cursor: pointer !important;
    -webkit-box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.75) !important;
    -moz-box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.75) !important;
    box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.75) !important;
  }
  
  #_auroral-doc-panel {
    width: 312px !important;
    height: 400px !important;
    background-color: white !important;
    position: fixed !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 1000 !important;
    border-radius: 4px 0px 0px 0px !important;
    -webkit-box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75) !important;
    -moz-box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75) !important;
    box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75) !important;
  }
  
  #_auroral-doc-panel a {
    text-decoration: none !important;
    color: #527d80 !important;
  }
  
  #_auroral-doc-panel-content {
    padding: 16px !important;
  }
  
  ._auroral-doc-panel-content-item {
    border: 1px solid rgba(0, 0, 0, 0.2) !important;
    border-radius: 4px !important;
    padding: 12px 16px !important;
    margin-bottom: 8px !important;
    position: relative !important;
  }
  
  ._auroral-doc-panel-content-item::after {
    content: ' \\276F';
    font-size: 20px !important;
    position: absolute !important;
    top: 24 !important;
    right: 12 !important;
  }
  
  ._auroral-doc-panel-content-title {
    font-size: 1.2em !important;
    margin-bottom: 4px !important;
  }
  
  ._auroral-doc-panel-content-description {
    color: black !important;
    font-size: 1em !important;
  }
  
  #_auroral-doc-panel-header {
    height: 48px !important;
    background-color: #464747 !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
  }
  
  #_auroral-doc-panel-title {
    color: white !important;
    padding-left: 12px !important;
  }
  
  #_auroral-doc-panel-title::before {
    content: url('https://cdn.jsdelivr.net/gh/KokolM/auroral-doc/icon-24.png') !important;
    width: 24px !important;
    height: 24px !important;
    vertical-align: -30% !important;
    padding: 0 16px 0 4px !important;
  }
  
  #_auroral-doc-panel-close {
    width: 16px !important;
    height: 16px !important;
    padding: 12px !important;
    cursor: pointer !important;
    text-align: center !important;
    border-radius: 1000px !important;
    color: white !important;
  }
  
  #_auroral-doc-panel-contrib {
    position: fixed !important;
    right: 12 !important;
    bottom: 8 !important;
    font-size: 0.8em !important;
  }
</style>`;
  document.head.insertAdjacentHTML('beforeend', style)
}
