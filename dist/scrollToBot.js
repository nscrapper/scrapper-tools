"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 30);
        });
    });
}
exports.default = autoScroll;
//# sourceMappingURL=scrollToBot.js.map