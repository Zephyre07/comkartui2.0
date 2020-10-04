import { Component, OnInit } from '@angular/core';
import { ICertificate } from '../model/ICertificate';
import { ICertificateList } from '../model/ICertificateList';
import certificateFields from '../jsons/certificateFields.json'
import { ComkartServiceService } from '../comkart-service.service';

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent implements OnInit {

  constructor(private _certificationService:ComkartServiceService) { }

  displayTitle:string='Certification Form';

  //Drop down fields
  technologies:any[]=[];
  certificateNames:any[]=[];
  providers:any[]=[];

  //Boolean to toggle show/hide "Certification Added!" message
  saved:boolean=false;

  //Initializing Form fields withdefault values
  certificateList:ICertificateList={
    techName:"",
    provider:"",
    certificateName:"",
    certificationDate:null,
    validTo:null
  };


  ngOnInit() {
    this.loadData();
  }

  loadData():void{
    console.log(this.technologies);

    //TODO: Replace certificateFields json with the a getter service to getCertificate()
    this.technologies=certificateFields.techName;
    this.certificateNames=certificateFields.certificationName;
    this.providers=certificateFields.provider;

  }

  onSubmitCertificate(certificate: ICertificateList): void {

    /* this._certificationService.onRegisterCertificate(certificate).subscribe(certificate=>{
      this.saved=true;
    });
 */

    //Replace the below code with above commented code
    console.log(certificate);
    this.saved = true;

  }
}
