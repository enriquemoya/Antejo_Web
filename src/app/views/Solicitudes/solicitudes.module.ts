import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ViewAppComponent } from './view.component';
import { AppRoutingModule } from './solicitudes-routing.module';
import { CommonModule } from '@angular/common';
import { CrearSolicitudesComponent } from './crear-solicitudes/crear-solicitudes.component';

@NgModule({
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule
  ],
  declarations: [ ViewAppComponent, CrearSolicitudesComponent ]
})
export class AppModule { }
