const text = document.querySelectorAll('h1, h2, h3, h4, p, li, td, caption, span, a, b, div, em')


const innerElements = ["<h1>", "<h2>", "<h3>", "<h4>", "<p>", "<li>", "<td>", "<caption>", "<span>", "<a>"]

// function containsAny(str, substrings) {
//     for (var i = 0; i != substrings.length; i++) {
//        var substring = substrings[i];
//        if (str.indexOf(substring) != - 1) {
//          return substring;
//        }
//     }
//     return null; 
// }
//containsAny(text[i].innerHTML, innerElements)

for (let i = 0; i < text.length; i++) {

    // will check if the text[i].innerHTML contains any of the innerElements if yes then ignore
    // else carry on
    //hasSpan = text[i].contains("<span>")


    innerHtmlText = text[i].innerHTML
    // if (innerHtmlText.includes("<") == false || text[i].outerHTML.includes("<p>") )
    if (innerHtmlText.includes("<") == false)
    // do it if it is not a span element
    {
        // console.log(text[i].hasChildNodes())
        // console.log(text[i])
        // console.log(text[i].outerHTML)
        // console.log(text[i].innerHTML)
        //console.log(text[i].innerHTML)
        var multext = text[i].innerHTML
        // multiple words  in a sentence

        // splittext array of words
        var splittext = multext.split(" ")

        // newtexts will hold all the texts
        var newtexts = ""

        for (oldtext of splittext) {
            // taking individual oldtext from the array 
            // modifying them and saving them as newtext

            var newtext = "<b>"
            let j = 0
            for (j = 0; j < oldtext.length / 2; ++j) {
                newtext += oldtext[j]
            }
            newtext += "</b>"
            newtext += oldtext.substring(j)
            // adding the changed text to the newtexts
            // console.log(newtext)
            newtexts += " " + newtext
        }

        // break

        text[i].innerHTML = newtexts

        //sconsole.log(text[i].innerHTML)

    } else {

        alltext = text[i].innerHTML
        textCounter = 1
        changedText = ""
        toChange = ""
        for (let i=0; i<alltext.length; ++i){
            if(alltext[i] == "<"){
                splitChange = toChange.split(" ")
                 // newtexts will hold all the texts
                var newtexts = ""

                for (oldtext of splitChange) {
                    // taking individual oldtext from the array 
                    // modifying them and saving them as newtext

                    var newtext = "<b>"
                    let j = 0
                    for (j = 0; j < oldtext.length / 2; ++j) {
                        newtext += oldtext[j]
                    }
                    newtext += "</b>"
                    newtext += oldtext.substring(j)
                    // adding the changed text to the newtexts
                    // console.log(newtext)
                    newtexts += " " + newtext
                }
                changedText+= newtexts
                textCounter = 0
            }
            if (textCounter){
                toChange += alltext[i] 
            } else {
                changedText += alltext[i]
            }
            if(alltext[i] == ">"){
                textCounter = 1
            }


        }
        // console.log(splitbefore)
        console.log(toChange)
        text[i].innerHTML = changedText
        break
    }


}