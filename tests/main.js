import odredi from '../main.mjs';
import test from 'ava';
test(`просто детектовање`, t => {
    t.plan(2);
    const lat = odredi('tekst tekst tekts');
    const cyrl = odredi('екст текст текст');
    t.is(cyrl, 'Cyrl');
    t.is(lat, 'Latn');
});
test('напреднија детекција', t => {
    t.plan(2);
    const lat = odredi('tekst текст текст tekst t');
    const cyrl = odredi('tekst текст tekst текст е');
    t.is(cyrl, 'Cyrl');
    t.is(lat, 'Latn');
});