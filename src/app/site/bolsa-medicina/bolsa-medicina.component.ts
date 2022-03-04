import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bolsa-medicina',
  templateUrl: './bolsa-medicina.component.html',
  styleUrls: ['./bolsa-medicina.component.scss']
})
export class BolsaMedicinaComponent implements OnInit {

  step: any = 1;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.step = this.step + 1;
    if(this.step == 8) {
      this.route.navigate(['/obrigado'])
  }
  }

  previous() {
    this.step = this.step - 1;
  }

}
