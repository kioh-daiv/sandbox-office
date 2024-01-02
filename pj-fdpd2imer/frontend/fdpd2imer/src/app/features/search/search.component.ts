import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchContentComponent } from './search-content/search-content.component';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgbNavModule, SearchContentComponent, ResultsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  navs = [1, 2, 3, 4, 5];
  counter = this.navs.length + 1;
  active: number = 0;

  close(event: MouseEvent, toRemove: number) {
    this.navs = this.navs.filter((id) => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.navs.push(this.counter++);
    event.preventDefault();
  }
}
