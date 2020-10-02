import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

import CertificateMonthlyStats from '../../jsons/certificate-montly-stats.json'

@Component({
  selector: 'app-stats-certification-barchart',
  templateUrl: './stats-certification-barchart.component.html',
  styleUrls: ['./stats-certification-barchart.component.css']
})
export class StatsCertificationBarchartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [1,1,1,1,1,1,1], label: 'Series A' },
    { data: [1,1,1,1,1,1,1], label: 'Series B' },
    { data: [1,1,1,1,1,1,1], label: 'Series C' },
    { data: [1,1,1,1,1,1,1], label: 'Series D' }
  ];
  public content:any[]=[];
  public contentParsed:any[]=[];

  constructor() { }

  ngOnInit() {
    this.update();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
 
  update(){
    this.contentParsed=JSON.parse(JSON.stringify(this.content));
      this.barChartLabels= CertificateMonthlyStats.monthlyStats.map(function(e){
        return e.month;
      });

      this.content=CertificateMonthlyStats.monthlyStats.map(function(e){
        return e.content;
      });

      for(let i=0;i<this.content.length; i++){

        for(let j=0;j<this.barChartLabels.length;j++){
          this.barChartData[i].data.push(this.content[j].values)
        }
      
        
        
        // this.barChartData[i].label=this.content.map(function(e){
        //   return e.techName;
        // });
        
      }

      console.log("TEST VALUE :"+
      JSON.stringify(this.content[2])
    );


 
  }
}