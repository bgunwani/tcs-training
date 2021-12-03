import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  contact: Contact = new Contact();

  contactForm: FormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // this.contactForm = this._formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    //   confirmPassword: ['', Validators.required]
    // })
  }

  addContact() {
    console.log(this.contact);
  }

}
