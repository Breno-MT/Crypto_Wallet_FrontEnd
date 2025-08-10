import en from "./locales/en";
import pt from "./locales/pt";

const dictionaries = { en, pt };
let currentLang = "pt";

export function setLang(lang) {
  if (dictionaries[lang]) {
    currentLang = lang;
  }
}

export function translateCaption(path, params = {}) {
  const keys = path.split(".");
  let text = dictionaries[currentLang];

  for (let key of keys) {
    text = text?.[key];
  }

  if (!text) return path;

  // Substituir parâmetros {param} caso seja passado
  //   Object.keys(params).forEach(param => {
  //     text = text.replace(`{${param}}`, params[param]);
  //   });

  return text;
}
