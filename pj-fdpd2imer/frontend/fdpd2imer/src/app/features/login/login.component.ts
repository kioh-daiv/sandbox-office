import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  selectedItem: string = '施設を選んでください。';

  constructor(private router: Router) {}

  navigateToSearchPage() {
    this.router.navigate(['/search']);
  }

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
