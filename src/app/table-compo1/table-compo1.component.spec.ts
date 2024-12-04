import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCompo1Component } from './table-compo1.component';

describe('TableCompo1Component', () => {
  let component: TableCompo1Component;
  let fixture: ComponentFixture<TableCompo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCompo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
