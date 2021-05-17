import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBlogOnePage } from './modal-blog-one.page';

describe('ModalBlogOnePage', () => {
  let component: ModalBlogOnePage;
  let fixture: ComponentFixture<ModalBlogOnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBlogOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBlogOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
