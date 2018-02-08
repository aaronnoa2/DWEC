import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpezarPartidaComponent } from './empezar-partida.component';

describe('EmpezarPartidaComponent', () => {
  let component: EmpezarPartidaComponent;
  let fixture: ComponentFixture<EmpezarPartidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpezarPartidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpezarPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
