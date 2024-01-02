import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSearchPanelComponent } from './result-search-panel.component';

describe('ResultSearchPanelComponent', () => {
  let component: ResultSearchPanelComponent;
  let fixture: ComponentFixture<ResultSearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultSearchPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
