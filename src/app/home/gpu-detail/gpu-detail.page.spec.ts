import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GpuDetailPage } from './gpu-detail.page';

describe('GpuDetailPage', () => {
  let component: GpuDetailPage;
  let fixture: ComponentFixture<GpuDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpuDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
