import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { APP_CONFIG, AppConfig } from "../app.config";


@Injectable({
  providedIn: 'root'
})
export class CatalogsService {
  constructor(public http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
  ) {}

    getEmpleados() {
        return this.http.get<Empleado[]>(`${this.config.apiEndpoint}/api/Employee` );
    }
    deleteEmpleado(id: number){
        return this.http.delete(`${this.config.apiEndpoint}/api/Employee/${id}`);
    }
    addEmpleado(Empleado : Empleado){
        return this.http.post(`${this.config.apiEndpoint}/api/Employee`,Empleado);
    }

    getCliente(){
        return this.http.get<Cliente[]>(`${this.config.apiEndpoint}/api/Customer` );
    }
    deleteCliente(id:number){
        return this.http.delete(`${this.config.apiEndpoint}/api/Customer/${id}`);
    }
    addCliente(Cliente : Cliente){
        return this.http.post(`${this.config.apiEndpoint}/api/Customer`,Cliente);
    }
    getProducto(){
        return this.http.get<Producto[]>(`${this.config.apiEndpoint}/api/Product` );
    }
    deleteproducto(id: number){
        return this.http.delete(`${this.config.apiEndpoint}/api/Product/${id}`);
    }
    addProducto(Producto : Producto){
        return this.http.post(`${this.config.apiEndpoint}/api/Product`,Producto);
    }
}

export interface Empleado{
    idNumber: number;
    name: string;
    familyName: string;
}

export interface Cliente{
    idString: string;
    name: string;
    cityName: string;
    phoneNumber:string; 

}

export interface Producto{
    idNumber: number;
    name:string;
    price: number;
    stock: number;
}