const text = document.querySelectorAll('h1, h2, h3, h4, p, li, td, caption, span, a')

for (let i=0; i<text.length; i++){
  if (text[i].innerHTML.includes('')){
    text[i].innerHTML = text[i].innerHTML.replace('Tom Brady','')
  }
}