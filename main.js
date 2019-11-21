module.exports = {
    odredi: function (word) {
        let regExp = /\p{sc=Cyrillic}/gui;  //RegExp for matching cyrillic characters
        let counterLat = word.match(/\w/gui) || false;   //takes the latin characters from the first 512 characters in a string
        if (counterLat) {
            counterLat = counterLat.length;   //counts them, if there are any
        }
        let counterCyrl = word.match(regExp) || false;    //takes the cyrillic characters from the first 512 characters in a string
        if (counterCyrl) {
            counterCyrl = counterCyrl.length;   //counts them, if there are any
        }
        if (counterLat > counterCyrl) {    //if there's more latin than cyrillic, it returns ISO code for latin as a string
            return 'Latn';
        }
        else {
            return 'Cyrl';  //otherwise there's more cyrillic, so it returns ISO code for cyrillic as a string
        }
    }
}