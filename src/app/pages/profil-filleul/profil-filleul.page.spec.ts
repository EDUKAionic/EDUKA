import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilFilleulPage } from './profil-filleul.page';

describe('ProfilFilleulPage', () => {
  let component: ProfilFilleulPage;
  let fixture: ComponentFixture<ProfilFilleulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilFilleulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
