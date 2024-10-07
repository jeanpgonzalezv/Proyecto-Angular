import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarberosPage } from './Barberos.page';

describe('BarberosPage', () => {
  let component: BarberosPage;
  let fixture: ComponentFixture<BarberosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
