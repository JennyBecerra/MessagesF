import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl ,Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  form:FormGroup;
  
  /*formulario = new FormGroup(
    {
      Number: new FormControl(null,[Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      Title: new FormControl(null),
      Message: new FormControl(null), 
      File: new FormControl(null) 
    }
  )*/
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

   /* const Data: any = {
      Number: this.form.get('Number')?.value,
      Title: this.form.get('Title')?.value,
      Message: this.form.get('Message')?.value,
     
    }
    this._ConexService.postMensaje(Data).subscribe(data=>{alert("mensaje enviado")});
    console.log(Data);*/
   // this.form.reset()
     var formData = new FormData();
     formData.append('Number', this.form.get('Number')?.value);
     formData.append('Title', this.form.get('Title')?.value );
     formData.append('Message', this.form.get('Message')?.value);
     formData.append('File', this.form.get('File')?.value);
     this._ConexService.postMensaje(formData).subscribe(data=>{alert("mensaje enviado")});
     //console.log(formData.get('Message'));
     
  }

  //file:any;

  ObtenerFile(event:any){
     
    
    //console.log(this.file);
    
      //console.log(this.file.type+' '+this.file.name);
      if( event.target.files.lenght>0){
        const file = event.target.files[0];

        if(file.type =='application/pdf' || file.type =='application/x-zip-compressed' || file.type =='image/png' || file.type =='text/xml' || file.type =='image/jpge'){
        this.form.patchValue({
          File: file
        })
      }
    
      //hacermetodo para error de archivos
      //console.log("error"+this.file.type + this.file.name);
     
    
     
  }


  }
}
