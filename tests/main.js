const detektor = require('detektor');
const test = require('ava');
test(`просто детектовање`, t => {
    t.plan(2);
    const lat = detektor.odredi('tekst tekst tekts');
    const cyrl = detektor.odredi('екст текст текст');
    t.is(cyrl, 'Cyrl');
    t.is(lat, 'Latn');
});
test('напреднија детекција', t => {
    t.plan(2);
    const lat = detektor.odredi('tekst текст текст tekst t');
    const cyrl = detektor.odredi('tekst текст tekst текст е');
    t.is(cyrl, 'Cyrl');
    t.is(lat, 'Latn');
});