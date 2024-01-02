import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { CustomModule } from './core/custom/custom.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fdpd2imer';
}
