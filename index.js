function switchLanguage(lang) {
    console.log("Switching language to", lang);
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
        console.log({ element, lang, text: element.textContent });
    });
    document.documentElement.lang = lang.startsWith('pt') ? 'pt-BR' : lang;;
}

document.addEventListener('DOMContentLoaded', () => {
    const supportedLanguages = ['en', 'pt'];
    const userLang = navigator.language.split('-')[0]; // Get primary language code
    const defaultLang = 'en';
    const selectedLang = supportedLanguages.includes(userLang) ? userLang : defaultLang;
    console.log({ supportedLanguages, userLang, defaultLang, selectedLang });
    switchLanguage(selectedLang);

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.id.split('-').pop()));
    });
});