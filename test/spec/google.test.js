describe('Google', () => {
    it('Google test', () => {
        browser.url('https://www.google.com/');
        const elements = browser.elements('#main a').value;
        elements.forEach(element => console.log(element.getHTML(false)));
    });
})
    