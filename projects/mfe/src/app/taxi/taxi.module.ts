import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TAXI_ROUTES } from './taxi.routes';
import { DestinationComponent } from './destination/destination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(TAXI_ROUTES)],
  declarations: [DestinationComponent],
})
export class TaxiModule {}
