import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginOneComponent } from './plugin-one.component';

describe('PluginOneComponent', () => {
  let component: PluginOneComponent;
  let fixture: ComponentFixture<PluginOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
