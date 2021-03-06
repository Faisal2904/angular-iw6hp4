import { Component,OnInit } from '@angular/core';
import{Http} from '@angular/http';

import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  genders=['male','female'];
  signupForm:FormGroup;
 forbiddenUsernmae=['chris','anna'];

 constructor(private http:Http){}

 onAddDatatoBackend(){
   this.http.post('https://udemy-ng-http-f58bd/database/firestore/data/',['Md','Faisal','Iqbal']);
 }


  onSubmit(){
    console.log(this.signupForm);
    this.http.post('https://myproj-caab0.firebaseio.com/',[{'name':'faisal'},{'surname':'Iqbal'}]).subscribe(
      (response)=>{console.log("this is the response of hhtp req",response );},
      (error)=>{console.log(error);}
    )

    this.http.get('https://myproj-caab0.firebaseio.com/data.json').subscribe(
      (response)=>{console.log("this is the response of hhtp req",response );},
      (error)=>{console.log(error);}
    )



  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAihfw2GeqImdX35WIxcjGp317jM5Y_q34",
    authDomain: "ng-recepie-1cce5.firebaseapp.com",
    // databaseURL: "https://sample6-d38d3.firebaseio.com",
    // projectId: "sample6-d38d3",
    // storageBucket: "gs://sample6-d38d3.appspot.com",
    // messagingSenderId: "358754973898"
    })

    //firebase.auth().createUserWithEmailAndPassword('dadasd@aa','sddfasf');
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null,[Validators.required,this.forbiddenName.bind(this)]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
     
      
      }),
      'gender': new FormControl('male'),
       'hobbies': new FormArray([])
    })

     console.log(this.signupForm);
  }



   forbiddenName( control:FormControl):{[s:string]:boolean}{    //custom validators
     if(this.forbiddenUsernmae.indexOf(control.value)!=-1){
       return {'nameisForbidden':true}
     }
  
}

 

  onAddHobby(){
    
    const control=new FormControl(null,Validators.required);
   (<FormArray> this.signupForm.get('hobbies')).push(control);

  }
  
}