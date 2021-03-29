import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUserProfileComponent } from './chat-user-profile.component';

describe('ChatUserProfileComponent', () => {
  let component: ChatUserProfileComponent;
  let fixture: ComponentFixture<ChatUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
