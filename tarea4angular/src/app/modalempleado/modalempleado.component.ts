import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { CatalogsService} from '../services/catalog.service';

@Component({
  selector: 'app-modalempleado',
  templateUrl: './modalempleado.component.html',
  styleUrls: ['./modalempleado.component.scss']
})

export class ModalempleadoComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<ModalempleadoComponent>,
    public formBuilder: FormBuilder , public catalog: CatalogsService)
    { 
      this.form = formBuilder.group({
        idNumber :[0,Validators.compose([Validators.required])],
        name: ['',Validators.compose([Validators.required])],
        familyName: ['',Validators.compose([Validators.required])]

      })
    }
  
    
    agregarEmpleado(){
      const empeladoform = this.form.value;
      console.log(empeladoform)
      this.catalog.addEmpleado(empeladoform).subscribe((empleado)=>{
        this.cancelar();
        
      })
    }
    cancelar(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
