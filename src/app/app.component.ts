import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '../../node_modules/@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  showAlert = false;
  closeAlert = false;
  firstNameCheck = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }
  closealert() {
    this.closeAlert = true;
    this.showAlert = false;
  }

  get getControls(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.loading = true;
    this.submitted= true;
    if(this.registerForm.invalid){
      return;
    }
  }
}
