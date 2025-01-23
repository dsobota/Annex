import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, signal, computed } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonLabel, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-test',
  standalone: true,
  imports:[IonRow, IonGrid, IonCol,IonLabel,IonButton, CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent  implements OnInit {
  numberBuffer : string[] = [];
  @ViewChild('result') result: string = ""
  @ViewChild('error') error: string = ""
  @ViewChild('debug-numbers') debugnumbers: string = ""

  numbers: number[] = [];
  

  operands: string[] = [];



  addDigit(digit : string){
//     //adds the number to the current buffer of numbers
     this.numberBuffer = [...this.numberBuffer, digit];
    this.result = this.numberBuffer.join("");
  }
 
  addOperands(operand : string){
    if(this.numberBuffer.length > 0){
      const newNumber = +(this.numberBuffer.join(""));
      this.numberBuffer = [];

      this.numbers = [...this.numbers, newNumber];
      this.operands = [...this.operands,operand];
      this.result = ""
      this.debugnumbers = "";

        if(this.numbers.length === this.operands.length ){
          for(let i = 0 ; i < this.operands.length; i++){
            this.debugnumbers +=  `${this.numbers[i]} ${this.operands[i]} `;
          }
        }
      


    }else{
      this.error = "Error: No number selected"
    }
  }

  clear(){
    this.numberBuffer = [];
    this.numbers = [];
    this.operands = [];
    this.result = ""
    this.error = ""
    this.debugnumbers = ""
  }

  calculate(){
    if(this.numberBuffer.length > 0){
      const newNumber = +(this.numberBuffer.join(""));
      this.numberBuffer = [];
      this.numbers = [...this.numbers, newNumber];

      if(this.numbers.length === this.operands.length + 1){
        let runningresult : number = this.numbers[0];
        for(let i = 0; i < this.operands.length; i++){
          const thisNumber = this.numbers[i+1];
          switch(this.operands[i]){
            case "+":{
              runningresult += thisNumber;
              break;
            }
            case "-": {
              runningresult -= thisNumber;
              break;
            }
            case "/": {
              runningresult /= thisNumber;
              break;
            }
            case "*":{
              runningresult *= thisNumber;
              break;
            }
            default: {
              //no
            }
          }
        }


        this.result = runningresult.toString();
        this.numberBuffer = runningresult.toString().split("");
        this.numbers = [];
        this.operands = [];
        this.error = ""
        this.debugnumbers = ""
      }

    } else{
      this.error = 'Cannot calculate, please enter a number';
    }


  }


  constructor() { }

  ngOnInit() {}

}
