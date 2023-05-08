"use strict";
/*******************************************************
 *     Template Engine of kwmJS.
 *
 *     renderTemplate is a method to render any given
 *     Template into any given DOM-Container. Optional
 *     values argument serves for dynamic-data-storage.
 *
 *     KWM - 2023-05-08
 *******************************************************/

export default class KWM_Templater{
    constructor(templatePath){
        this.templatePath = templatePath;
    }

    renderTemplate(templateName, container, values = false){
        return new Promise((resolve, reject) => {
            fetch(this.templatePath+templateName+".tpl?v=0.2")
                .then(response => response.text())
                .then(template=> {
                    let translationsRegex = /<%>(.*?)<%>/gi,
                        dataRegex= /<&>(.*?)<&>/gi,
                        translations = [],
                        data = [];

                    let rendered = this.findAndFillEscapings(dataRegex, data, "fill", template);
                    rendered = this.findAndFillEscapings(translationsRegex, translations, "translate", rendered);
                    container.innerHTML = rendered;
                    resolve();
                });
        });
    }

    findAndFillEscapings(regex, array, mode, template){
        let rendered = template;
        let result;
        while(result = regex.exec(template)){
            let replacement = (mode === "translate") ? translator.translate(result[1]) : values[result[1]];
            rendered = rendered.replace(template.substring(result.index, result.index+result[1].length+6), replacement);
        }
        return rendered;
    }
}