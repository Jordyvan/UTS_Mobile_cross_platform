import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpuDetailPage } from './cpu-detail.page';

describe('CpuDetailPage', () => {
  let component: CpuDetailPage;
  let fixture: ComponentFixture<CpuDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpuDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
