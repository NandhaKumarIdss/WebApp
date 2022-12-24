import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHelpComponent } from './site-help.component';

describe('SiteHelpComponent', () => {
  let component: SiteHelpComponent;
  let fixture: ComponentFixture<SiteHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
