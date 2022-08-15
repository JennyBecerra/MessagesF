import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  form: FormGroup;
  file: any;

  constructor(private fb: FormBuilder, private _ConexService: ConexionService) {
    this.form = this.fb.group({
      Number: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      Title: [''],
      Message: [''],
      File: ['']
    })

    // console.log(this.form.get('File')?.value);

  }


  ngOnInit(): void {
  }

  

  EnviarDatos() {
   

    var formData = new FormData();
    formData.set('Number', this.form.get('Number')?.value);
    formData.set('Title', this.form.get('Title')?.value);
    formData.set('Message', this.form.get('Message')?.value);
    formData.set('File', this.file);

    this._ConexService.postMensaje(formData).subscribe(
      data => { alert("mensaje enviado") },
      error => { alert("error al enviar el mensaje") });
     // console.log("1");
    
  }

  ObtenerFile(event: any) {
 
    var archivo =event.target.files[0];
    if (archivo.type == 'application/pdf' || archivo.type == 'application/x-zip-compressed' || archivo.type == 'image/jpeg' || archivo.type == 'image/png' || archivo.type == 'text/xml' ) {

      this.file =archivo;

    }else{
      console.log( archivo.type);
    }
}

  
}
