import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FAQSComponent {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  visibleItems: { [key: string]: boolean } = {};

  // Method to toggle visibility on button click
  toggleContentVisibility(item: string): void {
    this.visibleItems[item] = !this.visibleItems[item];
  }

  // Method to check if the content is visible for an item
  isContentVisible(item: string): boolean {
    return !!this.visibleItems[item];
  }


}
