import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  genders=['male','female'];
  signupForm:FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'hobbies': new FormArray([])
      
      }),
      'gender': new FormControl('male')
    })
  }


  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control=new FormControl(null,Validators.required);
   (<FormArray> this.signupForm.get('hobbies')).push(control);

  }
}