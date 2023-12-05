const elementos = [
    {tag: 'p', texto: 'Nunca'},
    {tag: 'div', texto: 'foi sorte'},
    {tag: 'section', texto: 'sempre'},
    {tag: 'footer', texto: 'foi Deus'}
]

const container = document.querySelector('section.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
}

container.appendChild(div)


