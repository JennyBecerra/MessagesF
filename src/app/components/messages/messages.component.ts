import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  form:FormGroup;
  
  constructor(private fb: FormBuilder, private _ConexService: ConexionService) { 
    this.form = this.fb.group({
      Number:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      Title:[''],
      Message:[''], 
      File:[''] 
    })

    
  }

  ngOnInit(): void {
  }

  EnviarDatos(){
    console.log(this.form);

    const Data: any = {
      Number: this.form.get('Number')?.value,
      Title: this.form.get('Title')?.value,
      Message: this.form.get('Message')?.value,
     
    }
    this._ConexService.postMensaje(Data).subscribe(data=>{alert("mensaje enviado")});
    console.log(Data);
   // this.form.reset()
  }

  file:any;

  ObtenerFile(event:any){
    this.file = event.target.files[0];
    
    console.log(this.file);
    if(this.file.type =='application/pdf' || this.file.type =='application/x-zip-compressed' || this.file.type =='image/png' || this.file.type =='text/xml' || this.file.type =='image/jpge'){
      console.log(this.file.type+' '+this.file.name);
      
    }else{
      //hacermetodo para error de archivos
      //console.log("error"+this.file.type + this.file.name);
     
    }
     
  }



}
