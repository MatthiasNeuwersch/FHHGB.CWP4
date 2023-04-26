"use strict";

/**********************************************************************
 *     Class-Bundle for Fuckn' Awzum JS-Shit.
 *
 *     You - 2023-04-27
 **********************************************************************/
//region Translator

//Resource Strings:
const KWM_Resources = {
    "de": {
        hello_world: "Hallo Welt",
        it_is_me: "Ich bin's",
    },
    "en": {
        hello_world: "Hello world",
        it_is_me: "It's me",
    },
    "ru": {
        hello_world: "Здравствуйте мир",
        it_is_me: "Это я",
    }
};

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

}

/*
Example-Code for Testing:

const template = "<p><%>my_name_is<%> <&>my_name<&>.</p><p><%>age<%>: <&>my_age<&></p>";
const container = document.getElementById("target_for_template"); //You can find this container in your index.html
const values = {my_name: "Ronald McDonald", my_age: 45};

renderTemplate(template, container, values);
*/

//endregion

//region Useful JS-Functions

function isEmpty(variable){

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