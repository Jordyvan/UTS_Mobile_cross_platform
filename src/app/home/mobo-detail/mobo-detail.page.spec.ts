import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoboDetailPage } from './mobo-detail.page';

describe('MoboDetailPage', () => {
  let component: MoboDetailPage;
  let fixture: ComponentFixture<MoboDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoboDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoboDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
