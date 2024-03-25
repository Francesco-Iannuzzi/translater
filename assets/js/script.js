// select DOM element
const inputText = document.querySelector('#text_to_translate');
const langButtons = document.querySelectorAll('.lang_button');
const resetButton = document.querySelector('.reset_button');

// DOM language from translation
const langFromTranslation = document.querySelector('#lang_from_translation');

// DOM translation
const translationText = document.querySelector('.text_translate');
const translationFlag = document.querySelector('.flag_tranlate');

/*

TRANSLATER

*/

// API url translater
async function translate(text, lang, flag, langFrom) {

    const urlTranslater = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${langFrom}|${lang}`;
    const response = await fetch(urlTranslater);
    const jsonData = await response.json();

    // show the translation in DOM
    const translation = jsonData.responseData.translatedText;
    translationText.innerText = translation;

    // show the flag trasnlation
    translationFlag.innerText = flag;

}


// select language from translation
langFromTranslation.onchange = function () { }


// loop in langs button
langButtons.forEach(btn => {

    // event listener on btns
    btn.addEventListener('click', function () {

        // recover the text to be translated
        const text = inputText.value;

        // recover the lang
        const lang = btn.dataset.lang;

        // recover the flag translation
        const flag = btn.innerText;

        // recover the languange from translation
        const langFrom = langFromTranslation.value;

        //invoke the translate function
        translate(text, lang, flag, langFrom);

    })
});


/*

Remove translate

*/

// function to remove translation
function reset() {
    // remove text in input
    inputText.value = '';

    // reset translation text
    translationText.innerText = 'Translation';

    // reset flag trasnaation
    translationFlag.innerText = '';

    // reset lang from translation
    langFromTranslation.selectedIndex = 0;
}

// event listener on reset button
resetButton.addEventListener('click', reset);