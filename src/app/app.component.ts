import { Component } from '@angular/core';
import { Util } from '../lib/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  errorMessage: string = "";
  isAmountValid: boolean = true;
  amount: string = "";
  intAmount: number = 0;
  rupiahs:any;

  constructor(){

  }

  submit(){
    this.rupiahs = [];
    this.validateAmount();
    if(this.isAmountValid){
      this.rupiahs = Util.GetRupiahs(this.intAmount);
    }
  }

  validateAmount(){
    if(this.amount){
      let result = Util.ValidateAndGetParseAmount(this.amount);
      if(result){
        this.isAmountValid = result.isValid;
        if(this.isAmountValid){
          if(result.value){
            this.intAmount = result.value;
          }
          else{
            this.setError("Amount of money is zero or empty");
          }
        }
        else{
          this.setError("Invalid amount of money");
        }
      }
    }
    else{
      this.setError("Amount of money is zero or empty");
    }
  }

  currencyFormat(amount){
    return Util.CurrencyFormat(amount);
  }

  setError(errorMessage){
    this.isAmountValid = false;
    this.intAmount = 0;
    this.errorMessage = errorMessage;
  }
}
