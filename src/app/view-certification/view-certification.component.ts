import { Component, OnInit } from '@angular/core';
import { ComkartServiceService } from '../comkart-service.service';
import { ICurrency } from '../model/ICurrency';
import currJson from '../jsons/currency.json'
import certJson from '../jsons/certificate.json'
import { ICertificateList } from '../model/ICertificateList';

@Component({
  selector: 'app-view-certification',
  templateUrl: './view-certification.component.html',
  styleUrls: ['./view-certification.component.css']
})
export class ViewCertificationComponent implements OnInit {

  constructor(private _certificationService:ComkartServiceService) { }

  errorMessage:String;
  certificates: ICertificateList[]=[];
  name:string="";
  numberOfCertification:number=0;
  empId:string="100080_FS";

  ngOnInit(): void {

    //this.onView(this.empId);  //TODO: This to be replaced with load(), so that it can fetch data from onCertificationView()
    this.load(this.empId);
  }

  load(employeeId:string):void{
    this.certificates=certJson.certificationList;
    this.name=certJson.employeeName;
    this.numberOfCertification=certJson.certificationList.length;
    
    this.empId=employeeId;
    
    console.log("JSONS:"+ this.certificates);
    console.log("Emp ID:"+ this.empId);
  }

  onView(empId:string):void{
    console.log(this._certificationService.employeeCertificationListView(empId)._subscribe);

    this._certificationService.employeeCertificationListView(empId).subscribe(
      currency=>{
        this.certificates=currency.certificationList;
        console.log("INCOMING:"+currency);
      },
      error => this.errorMessage= <any>error
      
    );
  }
}
