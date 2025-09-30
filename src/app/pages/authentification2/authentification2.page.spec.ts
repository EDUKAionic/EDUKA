import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Authentification2Page } from './authentification2.page';

describe('Authentification2Page', () => {
  let component: Authentification2Page;
  let fixture: ComponentFixture<Authentification2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Authentification2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
