import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'destination-formular',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent {
  DESTINATION_FOR_EACH_KM = 2;
  userInput: number = 0;
  displayValue: string = '';

  onSubmit(form: NgForm) {
    let destinationPrice = this.DESTINATION_FOR_EACH_KM * this.userInput;
    this.displayValue = `the price for your given distance of ${this.userInput} KM will cost ${destinationPrice} Euros`;
  }
}
