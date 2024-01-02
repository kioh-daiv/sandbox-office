import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDataPanelComponent } from './result-data-panel.component';

describe('ResultDataPanelComponent', () => {
  let component: ResultDataPanelComponent;
  let fixture: ComponentFixture<ResultDataPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultDataPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultDataPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
