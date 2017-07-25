import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';
import { DebugElement } from '@angular/core';

describe('TitleComponent', () => {
  let fixture: ComponentFixture<TitleComponent>;
  let component: TitleComponent;
  let debugElement: DebugElement;
  let target: TitleComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TitleComponent
      ]
    });

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new TitleComponent();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Interpolation Binding: field', () => {
    it(`should use getTitle() function in HTML`, () => {
      spyOn(component, 'getTitle');
      fixture.detectChanges();
      expect(component.getTitle).toHaveBeenCalled();
    });

    it(`should have title as 'todos' in class`, () => {
      expect(target.getTitle()).toBe('todos');
    });
  });
});
