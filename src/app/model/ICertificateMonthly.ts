export interface ICertificateMonthly{
    monthlyStats:monthlyStat[];
}
export interface monthlyStat{
    month:string;
    content:IContents[];
}
export interface IContents{
    techName:string;
    value:string;
}