
export class Util{
    static ValidateAndGetParseAmount(value){
        let cloneValue = value;
        var regex = /(?:^(?:Rp|Rp )?\d{1,3}(?:\.?\d{3})*(?:,\d{2})?$)/;
        var isValid = regex.test(cloneValue);
        if(cloneValue){
            if(cloneValue.indexOf('Rp') > -1){
                cloneValue = cloneValue.substring(cloneValue.indexOf('Rp')+2);
            }
            if(cloneValue){
                cloneValue = cloneValue.split('.').join("");
                if(cloneValue){
                    cloneValue = cloneValue.split(',')[0];
                    value = parseInt(cloneValue);
                }
            }
        }
        return {
            isValid: isValid,
            value: value
        };
    }
    static GetRupiahs(value){
        let fractions = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
        let selectedFractions = [];
        fractions.forEach(fraction => {
            let qty = value/fraction;
            qty = Math.floor(qty);
            if(qty){
                value = value - (fraction * qty);
                selectedFractions.push({
                    fraction: fraction,
                    qty: qty
                });
            }
        });
        if(value > 0){
            selectedFractions.push({
                fraction: value,
                qty: 0
            });
        }
        return selectedFractions;
    }
    static CurrencyFormat(value){
        if(value){
              var intValue = parseInt(value);
              return intValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return value;
    }
}