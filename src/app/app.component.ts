import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task';
  name: string;
  age: number = 18;
  contact: any;
  mail: string;
  form = new FormGroup({
    name: new FormControl('', [Validators.maxLength(24), Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(18), Validators.max(30)]),
    contact: new FormControl(null, [Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$')]),
    mail: new FormControl('', [Validators.email])
  })
  // registerForm: FormGroup;
  // submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    // this.registerForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
    // console.log(this.form);
  }
  // get f() { return this.registerForm.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  // }
}
