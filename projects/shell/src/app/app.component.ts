import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  constructor(private router: Router) {}

  onTabChanged(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.router.navigate(['/']);
        break;
      case 1:
        this.router.navigate(['taxi/destination']);
        break;
    }
  }
}
