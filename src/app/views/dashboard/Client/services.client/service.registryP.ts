import { BankP } from './../info-client-physic/bank-p/m-bank-p';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';


@Injectable()
export class PostRegistryP {

  model: BankP = new BankP();

  idclient = '';

  constructor(private router: Router, private http: HttpClient) { }

  registryInfo(model, callback) {
    this.http.post('/Clients/Clientes/add', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        console.log(data);
        if (data['error'] === false) {
          this.idclient = data['client']['id'];
          callback(false);
        } else {
          callback(true)
        }
        // Read the result field from the JSON response.
      });
  }

  registryBank(model, callback) {
  model.idclient = this.idclient;
    this.http.post('/Clients/Clientes/add/BancosClientes', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        if (data['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
         });
  }

  registryFileCD(model, callback) {
    model.type = 'Compobante Domicilio'
    model.idclient = this.idclient;
    this.http.post('Clients/Cliente/add/FilesClient', model,
     {
        headers: new HttpHeaders().set('Content-type', 'application/json')
     }).subscribe(data => {
         if (data['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
     });
  }
}
