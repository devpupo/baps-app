import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBlogThreePage } from './modal-blog-three.page';

describe('ModalBlogThreePage', () => {
  let component: ModalBlogThreePage;
  let fixture: ComponentFixture<ModalBlogThreePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBlogThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBlogThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
