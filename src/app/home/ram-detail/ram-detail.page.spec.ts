import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RamDetailPage } from './ram-detail.page';

describe('RamDetailPage', () => {
  let component: RamDetailPage;
  let fixture: ComponentFixture<RamDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RamDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
