// select DOM element
const inputText = document.querySelector('#text_to_translate');
const langButtons = document.querySelectorAll('.lang_button');
const resetButton = document.querySelector('.reset_button');

// DOM translation
const translationText = document.querySelector('.text_translate');
const translationFlag = document.querySelector('.flag_tranlate');

/*

TRANSLATER

*/

// API url translater
async function translate(text, lang, flag) {

    const urlTranslater = `https://api.mymemory.translated.net/get?q=${text}!&langpair=it|${lang}`;
    const response = await fetch(urlTranslater);
    const jsonData = await response.json();

    // show the translation in DOM
    const translation = jsonData.responseData.translatedText;
    translationText.innerText = translation;

    // show the flag trasnlation
    translationFlag.innerText = flag;

}

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

        //invoke the translate function
        translate(text, lang, flag);

    })
});