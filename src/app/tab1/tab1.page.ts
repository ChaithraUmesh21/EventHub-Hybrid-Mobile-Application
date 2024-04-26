import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  constructor(public popoverController: PopoverController) {}

  async openLocationPopover() {
    const popover = await this.popoverController.create({
      component: LocationPopoverComponent,
      translucent: true,
      cssClass: 'location-popover'
    });
    return await popover.present();
  }

  selectLocation(city: string) {
    // Implement logic to handle the selection of a city
    console.log('Selected city:', city);
  }

}

@Component({
  selector: 'location-popover',
  template: `
    <ion-searchbar placeholder="Search City"></ion-searchbar>
    <ion-list>
      <ion-item *ngFor="let city of cities" (click)="selectLocation(city)">
        {{ city }}
      </ion-item>
    </ion-list>
  `
})
export class LocationPopoverComponent {

  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  constructor(private popoverController: PopoverController) {}

  selectLocation(city: string) {
    this.popoverController.dismiss(city);
  }
}
