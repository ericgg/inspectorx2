import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamelogicComponent } from './gamelogic.component';

describe('GamelogicComponent', () => {
  let component: GamelogicComponent;
  let fixture: ComponentFixture<GamelogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamelogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamelogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
