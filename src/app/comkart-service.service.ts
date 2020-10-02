import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICurrency } from './model/ICurrency';
import { ICertificateList } from './model/ICertificateList';
import { ICertificate } from './model/ICertificate';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin':'*'
  })
};
@Injectable()
export class ComkartServiceService {

  private _currencyUrl='http://localhost:8080/comKart/currencies';
  private _currencyUrlJson='./jsons/certificate.json';
  

  constructor(private _http: HttpClient)
    {

    }


    onView():Observable<ICertificate>{
      //console.log(currency);
      
      //return this._http.get<ICurrency[]>(this._currencyUrl);
      return this._http.get<ICertificate>(this._currencyUrl);
    }

    getCurrency():Observable<ICurrency[]>{
      return this._http.get<ICurrency[]>(this._currencyUrl);
    }

}
