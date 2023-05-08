"use strict";

/**********************************************************************
 *     Class-Bundle for Fuckn' Awzum JS-Shit.
 *
 *     You - 2022-03-14
 **********************************************************************/
//region Translator

//Resource Strings:
const KWM_Resources = {
    "de": {
        hello_world: "Hallo Welt",
        it_is_me: "Ich bin's",
        my_name_is: "Mein Name ist",
        age: "Alter",
    },
    "en": {
        hello_world: "Hello world",
        it_is_me: "It's me",
        my_name_is: "My name is",
        age: "age",
    },
    "ru": {
        hello_world: "Здравствуйте мир",
        it_is_me: "Это я",
        my_name_is: "Меня Совут",
        age: "Сколко лет",
    }
};
class KWM_Translator{
    constructor(...languages){
        for(const lng of languages)
            this[lng] = KWM_Resources[lng];
        this.currentLanguage = languages[0];
    }

    translate(key, language = this.currentLanguage){
        return isEmpty(this[language][key]) ? "--Missing translation: "+key+"--": this[language][key];
    }
}
let translator = new KWM_Translator("de", "en", "ru");
window.translator = translator;
console.log(translator.translate("hello_world"));
console.log(translator.translate("it_is_me", "en"));
translator.currentLanguage = "ru";
console.log(translator.translate("hello_world"));
console.log(translator.translate("non_existing_key", "en"));
/*
Example-Code for Testing:

let translator = new KWM_Translator("de", "en", "ru");
console.log(translator.translate("hello_world"));
console.log(translator.translate("it_is_me", "en"));
translator.currentLanguage = "ru";
console.log(translator.translate("hello_world"));
console.log(translator.translate("non_existing_key", "en"));
*/

/* Expected result:
Hallo Welt
It's me
Здравствуйте мир
--Missing translation: non_existing_key--
 */
//endregion

//region Templating
function renderTemplate(template, container, values={}){
    //Okay, let's get some regex!
    let translationsRegex = /<%>(.*?)<%>/gi;
    let dataRegex= /<&>(.*?)<&>/gi;
    let translations = [];
    let data = [];

    //At first, the values
    let rendered = findEscapings(dataRegex, data, "fill", template);
    //Then the translations
    rendered = findEscapings(translationsRegex, translations, "translate", rendered);
    container.innerHTML = rendered;

    function findEscapings(regex, array, mode, template){
        let rendered = template;
        let result;
        while(result = regex.exec(template)){
            let replacement = (mode === "translate") ? translator.translate(result[1]) : values[result[1]];
            rendered = rendered.replace(template.substring(result.index, result.index+result[1].length+6), replacement);
        }
        return rendered;
    }
}

const template = "<p><%>my_name_is<%> <&>my_name<&>.</p><p><%>age<%>: <&>my_age<&></p>";
const container = document.getElementById("target_for_template"); //You can find this container in your index.html
const values = {my_name: "Ronald McDonald", my_age: 45};
translator.currentLanguage = "en";
renderTemplate(template, container, values);

/* Testscript
const template = "<p><%>my_name_is<%> <&>my_name<&>.</p><p><%>age<%>: <&>my_age<&></p>";
const container = document.getElementById("target_for_template"); //You can find this container in your index.html
const values = {my_name: "Ronald McDonald", my_age: 45};

renderTemplate(template, container, values);
*/
//endregion

//region Useful JS-Functions

function isEmpty(variable){
    if(Array.isArray(variable))
        return (variable.length == 0);
    else if(typeof variable === "object")
        return (Object.entries(variable).length === 0 && variable.constructor === Object);
    else
        return(typeof variable === "undefined" || variable == null || variable === "");
}
function getOS(){

}

function clientHasCamera(){

}

function getIndexOfObjectInArrayByPropertyvalue(array, property, value){

}

/*
Example-Code for Testing: */
const students = [ { name: "John", age: 20 }, { name: "Irina", age: 19 }, { name: "Ivan", age: 22 } ];

let result = getIndexOfObjectInArrayByPropertyvalue(students, "name", "Irina");
//Expected result: 1

//endregion