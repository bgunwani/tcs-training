import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from "@angular/forms";
import Validation from '../_helpers/must-match.validator';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  contact: Contact = new Contact();

  submitted: boolean = false;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false)
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      })
  }

  get f() {
    return this.contactForm.controls;
  }

  addContact() {
    // console.log(this.contact);
    this.submitted = true;
    if (this.contactForm.invalid) return;
    console.log(JSON.stringify(this.contactForm.value, null, 2));
  }

}
