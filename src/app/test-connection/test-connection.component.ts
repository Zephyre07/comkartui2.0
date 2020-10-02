import { Component, OnInit } from '@angular/core';
import { ComkartServiceService } from '../comkart-service.service';
import { ICurrency } from '../model/ICurrency';

@Component({
  selector: 'app-test-connection',
  templateUrl: './test-connection.component.html',
  styleUrls: ['./test-connection.component.css']
})
export class TestConnectionComponent implements OnInit {

  constructor(private _currencyService:ComkartServiceService) { }
  currencies:ICurrency[]=[];
  errorMessage:String="Customer Error- TestConnection";

  ngOnInit(): void {
    this.getCurrency();
  }

  getCurrency():void{

    this._currencyService.getCurrency().subscribe(
      currency=>{
        this.currencies=currency;
        console.log("INCOMING:"+currency);
      },
      error => this.errorMessage= <any>error
      
    );
  }

}
