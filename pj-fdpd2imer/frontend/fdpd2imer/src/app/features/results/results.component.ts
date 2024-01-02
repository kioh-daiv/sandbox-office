import { Component } from '@angular/core';
import { ResultSearchPanelComponent } from './result-search-panel/result-search-panel.component';
import { ResultDataPanelComponent } from './result-data-panel/result-data-panel.component';
import { ResultGraphsPanelComponent } from './result-graphs-panel/result-graphs-panel.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    ResultSearchPanelComponent,
    ResultDataPanelComponent,
    ResultGraphsPanelComponent,
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {}
