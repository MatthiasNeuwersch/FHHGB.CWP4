"use strict";
import KWM_Route from '../js/kwm-route.js?v=0.2';

/*******************************************************************************
 *     Sample Home-View given with the framework. This view may well be edited.
 *
 *     How to use views:
 *     1.) Export a new KWM_Route. Give it two @params:
 *       - The slug for it's Url, relative to the webroot
 *       - The function that is called, when the view is initiated.
 *
 *     2.) Import the View to and add the view-name (view.NAME.js) to the views-
 *         property in kmw-config.js
 *
 *     3.) Edit the view as it pleases you. Most likely  you will want to render
 *         some Templates, as seen in this example.
 *
 *     Hint:
 *     You may give the variable "view" in this file a  different name  without
 *     consequences. It is recommended to be view, and then be renamed in the
 *     import-statement of the config-file.
 *
 *     KWM - 2022-03-26
 *******************************************************************************/

export let view = new KWM_Route("/", async function(){
    await this.rendering();
});

view.rendering = async function(){
    await kwm.templater.renderTemplate("home", document.getElementById("kwmJS"));
    // await kwm.templater.renderTemplate("partial-a", document.getElementById("partial-a-container"),["fiends", "love", "chicken"]);

    // let button = simplebutton.addEventListener("click", function(){
    //     alert("test");
    // });



/* Async JS Showcase: *Ü/
    /* CALLBACK */

    function printString(){
        console.log("Right before");
        console.time("callback");
        setTimeout(function()  {
            console.log("Finished");
            console.timeLog("callback");
        }, 300);
        console.log("Right after")
        console.timeLog("callback");
    }

    //printString();

    /* PROMISE */

    function usePromise(){
        const myFirstPromise = new Promise((resolve, reject) => {
            const condition = true;
            if(condition) {
                setTimeout(function(){
                    resolve("Finished");
                }, 300);
            } else {
                reject('Promise is rejected!');
            }
        });
        console.log("Right before");
        console.time("promise");
        myFirstPromise
            .then((successMsg) => {
                console.log(successMsg);
                console.timeLog("promise");
            })
            .catch((errorMsg) => {
                console.log(errorMsg);
                console.timeLog("promise");
            });
        console.log("Right after");
        console.timeLog("promise");
    }

    //usePromise();


    /* ASYNC AWAIT */

    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }

    async function asyncCall() {
        console.log('calling');
        const result = await resolveAfter2Seconds();
        console.log(result);
        // expected output: "resolved"
    }

    asyncCall();
};