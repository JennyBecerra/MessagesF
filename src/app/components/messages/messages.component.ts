import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  form:FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      Number:[''],
      Title:[''],
      Message:[''],  
    })

    
  }

  ngOnInit(): void {
  }

  ObtenerDatos(){
    console.log(this.form);
  }
  fileToUpload: File | null = null;

  file:any;

  ObtenerFile(event:any){
    this.file = event.target.files[0];
    console.log(this.file);
  }

}
