import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksCollectionComponent } from './marks-collection.component';

describe('MarksCollectionComponent', () => {
  let component: MarksCollectionComponent;
  let fixture: ComponentFixture<MarksCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
