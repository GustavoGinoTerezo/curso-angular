import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGerenciamentoComponent } from './form-gerenciamento.component';

describe('FormGerenciamentoComponent', () => {
  let component: FormGerenciamentoComponent;
  let fixture: ComponentFixture<FormGerenciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGerenciamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGerenciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
