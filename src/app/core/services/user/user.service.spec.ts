import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';

let service: UserService;

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [UserService], imports: [HttpClientTestingModule] });
});

it('should create', () => {
  service = TestBed.inject(UserService);
  expect(service).toBeTruthy();
});
