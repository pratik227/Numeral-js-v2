// numeral.js locale configuration
// locale : German in Switzerland (en-in)

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    numeral.register('locale', 'in', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        trillion: 10000000,
        billion: 999999999999999,
        million: 100000,
        regex: /(\d)(?=(\d\d)+\d$)/g,
        abbreviations: {
            thousand: 'k',
            million: 'L',
            billion: 'a',
            trillion: 'Cr'
        },
        abbreviations_detail: {
            thousand: 2,
            million: 5,
            billion: 25,
            trillion: 7
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                        (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '\u20B9'
        }
    });
}));
