import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { By } from '@angular/platform-browser';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'todos'`, () => {
    expect(component.getTitle()).toBe('todos');
  });

  it(`should use getTitle() function in HTML`, () => {
    spyOn(component, 'getTitle').and.returnValue('fake');
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(element.textContent).toBe('fake');
  });
});
