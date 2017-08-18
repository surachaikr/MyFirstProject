import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage({
  name: 'deeplinks-demo',
  segment: 'deeplinks-demo-path/:id/:name',
  defaultHistory: ['HomePage', 'ThemePage']
})

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
 
  profileForm: FormGroup;
  output: string = 'no data';
  constructor(public formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  saveProfile(form) {
    this.output = form.value.name + " " + form.value.email;
  }

}
