import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public erro = ''

  public email = this.fb.control('', [ Validators.required, Validators.email ]);
  public password = this.fb.control('', [ Validators.required ]);

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    if (this.form.invalid){
      return;
    }
    this.router.navigate(['/painel']) ;
}

}
