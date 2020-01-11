"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function waitForElement(selector) {
    return new Promise(function (resolve, reject) {
        let node;
        const element = document.querySelector(selector);
        if (element) {
            resolve(element);
            return;
        }
        var observer = new MutationObserver(function (mutations) {
            if ((node = document.querySelector(selector))) {
                observer.disconnect();
                resolve(node);
                return;
            }
        });
        observer.observe(document, { childList: true, subtree: true });
    });
}
function waitForElementToBeRemoved(selector) {
    return new Promise(function (resolve, reject) {
        let node;
        const element = document.querySelector(selector);
        if (!element) {
            resolve(true);
            return;
        }
        var observer = new MutationObserver(function (mutations) {
            if ((node = document.querySelector(selector))) {
                observer.disconnect();
                resolve(node);
                return;
            }
        });
        observer.observe(document, { childList: true, subtree: true });
    });
}
const consoleLogError = (e) => console.log('Error:::', e);
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
function triggerInputChange(node, value = '') {
    const inputTypes = [
        window.HTMLInputElement,
        window.HTMLSelectElement,
        window.HTMLTextAreaElement,
    ];
    if (inputTypes.indexOf(node.__proto__.constructor) > -1) {
        const setValue = Object.getOwnPropertyDescriptor(node.__proto__, 'value')
            .set;
        const event = new Event('input', { bubbles: true });
        setValue.call(node, value);
        node.dispatchEvent(event);
    }
}
function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
exports.default = {
    waitForElement,
    waitForElementToBeRemoved,
    delay,
};
//# sourceMappingURL=functionToInject.js.map