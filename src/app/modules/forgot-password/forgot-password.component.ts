import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  @Input()
  pattern:
    | string
    | RegExp; /**Adding pattern to validate through regular expression */

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  /**
   * @ FormData : passwordData
   * @ Purpose  : Creating form data with validation
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  passwordData: FormGroup = this.fb.group({
    newPassword: ['', [Validators.required, Validators.pattern]],
    confirmPassword: ['', [Validators.required]],
  });
  /**
   * @ function : Submit()
   * @ Purpose  : submitting the form data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  public submit(): void {
    console.log('form Data:', this.passwordData.value);
  }
  /**
   * @ function : formData()
   * @ Purpose  : Getting controls of the form data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  public get formData(): any {
    return this.passwordData.controls;
  }
}
