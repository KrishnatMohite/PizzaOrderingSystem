import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MakePizzaComponent } from './make-pizza.component';
import { AppModule } from 'src/app/app.module';

describe('MakePizzaComponent', () => {
  let component: MakePizzaComponent;
  let fixture: ComponentFixture<MakePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
