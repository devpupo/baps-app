import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBlogTwoPage } from './modal-blog-two.page';

describe('ModalBlogTwoPage', () => {
  let component: ModalBlogTwoPage;
  let fixture: ComponentFixture<ModalBlogTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBlogTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBlogTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
