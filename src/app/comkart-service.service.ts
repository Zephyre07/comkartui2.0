import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICurrency } from './model/ICurrency';
import { ICertificateList } from './model/ICertificateList';
import { ICertificate } from './model/ICertificate';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable()
export class ComkartServiceService {

  private _comkartUrl = 'http://localhost:8080/comKart';

  //test url for connection-test tab
  private _currencyUrl = 'http://localhost:8080/comKart/currencies';

  //private _currencyUrlJson = './jsons/certificate.json';


  constructor(private _http: HttpClient) { }

  getCurrency(): Observable<ICurrency[]> {
    return this._http.get<ICurrency[]>(this._currencyUrl);
  }
    
    //To get the JSON with emp details and Certification list. GET: /certificate/{empId}
  employeeCertificationListView(empId: string): Observable<ICertificate> {
    return this._http.get<ICertificate>(this._comkartUrl + "/certificate/empId");
  }

    //To save the certificate. POST: /certificate/save
  onRegisterCertificate(certificate:ICertificate): Observable<any> {
    return this._http.post<any>(this._comkartUrl + '/certificate/save', certificate);
  }
}
