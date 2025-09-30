import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilParentPage } from './profil-parent.page';

describe('ProfilParentPage', () => {
  let component: ProfilParentPage;
  let fixture: ComponentFixture<ProfilParentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
