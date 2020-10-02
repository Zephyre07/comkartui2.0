import { Component, OnInit } from '@angular/core';
import { ICertificate } from '../model/ICertificate';
import { ICertificateList } from '../model/ICertificateList';
import certificateFields from '../jsons/certificateFields.json'


@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent implements OnInit {

  //constructor(private _customerService:CustomerService) { }

  displayTitle:string='Certification Form';
  technologies:any[]=[];
  certificateNames:any[]=[];
  providers:any[]=[];

  certificateList:ICertificateList={
    techName:"",
    provider:"",
    certificateName:"",
    certificationDate:null,
    validFrom:null,
    validTo:null
  };

  // certificate:ICertificate={

  //   employeeId:0,
  //   employeeName:"",
  //   resourceUserId:"",
  //   empStatus:"",
  //   mobileNumber:"",
  //   capgeminiEmailId: "",
  //   nordeaEmailId:"",
  //   ggId:"",
  //   certificationList:this.certificateList,
  //   responseMessage:"",
  //   responseCode:""
  // };

  ngOnInit() {
    this.loadData();
  }

  loadData():void{
    this.technologies=certificateFields.techName;
    console.log(this.technologies);
    this.certificateNames=certificateFields.certificationName;
    this.providers=certificateFields.provider;

  }

  onSubmit(customer:ICertificateList):void{
    console.log(customer);
    //this._customerService.onRegister(customer).subscribe();
  }
}
