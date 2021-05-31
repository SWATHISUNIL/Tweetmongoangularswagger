import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalltweetsbyuserComponent } from './viewalltweetsbyuser.component';

describe('ViewalltweetsbyuserComponent', () => {
  let component: ViewalltweetsbyuserComponent;
  let fixture: ComponentFixture<ViewalltweetsbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalltweetsbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalltweetsbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
