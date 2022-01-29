/*
 * arabic-En : WebExtension to transliterate webpages
 * https://subinsb.com/indicen
 *
 * This work is licensed under GNU General Public License version 3.
 * 
 * Copyright 2020 Subin Siby <mail@subinsb.com>
*/

import ALA_LC_Transliterator from './ArabicTransliterator.js';

import '../styles/options.scss';

var form = document.getElementById('transliterate-form');
form.onsubmit = function(e) {
    e.preventDefault();

    var l = document.getElementById('lang').value,
        input = document.getElementById('input').value,
        output = '',
        t = new ALA_LC_Transliterator();

    if (l === 'ar') {
        output = t.romanize(input);
    } else {
        output = "Error: Lang not supported!";
    }

    document.getElementById('output').value = output;

    return false;
};
