import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShearchBar } from './shearch-bar';

describe('ShearchBar', () => {
  let component: ShearchBar;
  let fixture: ComponentFixture<ShearchBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShearchBar],
    }).compileComponents();

    fixture = TestBed.createComponent(ShearchBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
