import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';

  result = '0';
  operand1 = '';
  operator = '';
  operand2 = '';
  current_op=1;

  handleClick(value: string) {
    if (value === 'C') {
      this.clear();
      this.current_op=1;
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      this.operator = value;
      this.current_op=2;
    } else if (value === '.') {
      if (!this.result.includes('.')) {
        this.result += value;
        if(this.current_op==1)
        {
            if(!this.operand1.includes('.'))
            {
              this.operand1 += value;
            }
        }else{
          if(!this.operand2.includes('.'))
          {
            this.operand2 += value;
          }
        }
      }
    } else if (value === '=') {
      this.calculate();
      this.current_op=1;
    } else {
      if (this.operator === '') {
        this.operand1 += value;
        this.result = this.operand1;
      } else {
        this.operand2 += value;
        this.result = this.operand2;
      }
    }
  }

  clear() {
    this.result = '0';
    this.operand1 = '';
    this.operator = '';
    this.operand2 = '';
    this.current_op=1;
  }

  calculate() {
    const operand1 = parseFloat(this.operand1);
    const operand2 = parseFloat(this.operand2);
    let result = 0;

    switch (this.operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        break;
    }

    this.result = result.toString();
    this.operand1 = '';
    this.operator = '';
    this.operand2 = '';
    this.current_op=1;
  }

}
