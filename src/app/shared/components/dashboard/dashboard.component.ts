import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showCustomDate: boolean;
  selectedDate: string;
  selectBranch: string;
  transctionChart = {
    series: [
      {
        name: 'Transction Count',
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: 'Transction Amount',
        data: [13, 23, 20, 8, 13, 27],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      width: 1000,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        '01-09-2024',
        '01-09-2024',
        '01-09-2024',
        '01-09-2024',
        '01-09-2024',
        '01-09-2024',
      ],
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };

  donutChart = {
    series: [100000, 90000, 2000],
    chart: {
      type: 'donut',
      toolbar: {
        show: false, // Hides the toolbar
      },
    },
    labels: ['Total VPA', 'Active VPA', 'Blocked VPA'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    colors: ['#1A55E3', '#00D284', '#FF0854'],
    tooltip: {
      enabled: false,
    },
  };
  dateFilterChnage(event) {
    if (this.selectedDate == 'custom') {
      this.showCustomDate = true;
    } else {
      this.showCustomDate = false;
    }
  }
}
