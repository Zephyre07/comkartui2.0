import {ICertificateList} from './ICertificateList';

export interface ICertificate{
  
    employeeId: number;
    employeeName:string;
    resourceUserId:string;
    empStatus: string;
    mobileNumber:string;
    capgeminiEmailId: string;
    nordeaEmailId:string;
    ggId:string;
    certificationList: ICertificateList[];
    responseMessage:string;
    responseCode:string;
   
}