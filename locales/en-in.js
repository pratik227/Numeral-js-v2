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
        trillion: 999999999999999,
        billion: 10000000,
        million: 100000,
        regex: /(\d)(?=(\d\d)+\d$)/g,
        abbreviations: {
            thousand: 'k',
            million: 'l',
            billion: 'cr',
            trillion: 'a'
        },
        abbreviations_detail: {
            thousand: 2,
            million: 5,
            billion: 7,
            trillion: 9
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
