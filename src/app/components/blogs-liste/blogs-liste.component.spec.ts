import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsListeComponent } from './blogs-liste.component';

describe('BlogsListeComponent', () => {
  let component: BlogsListeComponent;
  let fixture: ComponentFixture<BlogsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
