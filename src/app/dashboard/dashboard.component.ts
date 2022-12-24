import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  images: carouselImage[] = [];
  selectedIndex = 0;
  indicators = true;
  controls = true;
  autoSlide = true;
  slideInterval = 2000;

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.getImagesFromJson();
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  getImagesFromJson() {
    this.httpService.get<any>("./assets/Json/corouselData.json").subscribe((data) => {
      this.images = data.images;
    });
  }



  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPreviewClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
