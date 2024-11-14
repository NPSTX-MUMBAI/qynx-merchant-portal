import { Component, Input, OnInit, ViewChild } from '@angular/core';

// import { ChartComponent } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexXAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: any;
  chart: ApexChart;

  labels: any;
  colors: any[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};
@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrl: './apex-chart.component.scss',
})
export class ApexChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  @Input() label: any[];
  @Input() serise: any[];
  @Input() colors: any[];
  @Input() chartType: string;
  @Input() chartOp: any;
  public chartOptions:any;

  constructor() {}
  ngOnInit(): void {
    this.chartOptions = this.chartOp;
  }
}
