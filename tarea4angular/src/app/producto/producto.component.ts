import { Component, OnInit , ViewChild} from '@angular/core';
import { Producto,CatalogsService} from '../services/catalog.service';
import { MatTable } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ModalproductoComponent} from '../modalproducto/modalproducto.component'


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  columnas: string[] = ['idNumber', 'name', 'price','stock','delete'];
  Productos : Producto [] = [];
  @ViewChild(MatTable) tabla1: MatTable<Producto>| undefined
  constructor(public catalog:CatalogsService, public dialog: MatDialog) 
  {

  }

  ngOnInit(): void {
    this.cargardatos();
  }

  cargardatos(){
    this.catalog.getProducto().subscribe(productoslist=>{
      console.log(productoslist);
      this.Productos= productoslist;
    })
  }
  eliminar(id:number){
    this.catalog.deleteproducto(id).subscribe(d =>{
      this.cargardatos();
     
    })
  }
  openmodal(): void {
    const dialogRef = this.dialog.open(ModalproductoComponent, {
      width: '300px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cargardatos();
    });
  }
}
