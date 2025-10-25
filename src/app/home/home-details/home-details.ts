import {Component, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {NgbCarousel, NgbCarouselConfig, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home-details',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    NgbCarouselModule,
    NgOptimizedImage
  ],
  templateUrl: './home-details.html',
  styleUrl: './home-details.css',
})
export class HomeDetails {



  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.interval = 0;
  }


  tempImages: number[] = [1, 2, 3];

  @ViewChild(NgbCarousel, { static: false }) carousel!: NgbCarousel;
  onClickEvent(cardId: string): void {
    this.carousel.select(cardId);
  }


}
