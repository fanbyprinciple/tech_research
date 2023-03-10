const text = document.querySelectorAll('h1, h2, h3, h4, p, li, td, caption, span, a')

for (let i=0; i<text.length; i++){
    text[i].style.fontWeight = 'bold'
}