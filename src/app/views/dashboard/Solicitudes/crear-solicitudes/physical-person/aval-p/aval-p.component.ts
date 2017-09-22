import { AvalP } from './m-aval-p';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aval-p',
  templateUrl: './aval-p.component.html',
  styleUrls: ['./aval-p.component.scss']
})
export class AvalPComponent implements OnInit {

    submitted = false;

  model: AvalP = new AvalP();


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
