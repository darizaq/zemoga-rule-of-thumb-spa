import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerMainComponent } from './components/banner-main/banner-main.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerMainComponent, FeaturedCardComponent, HeaderComponent, NavigationComponent],
  exports: [BannerMainComponent, FeaturedCardComponent, HeaderComponent, NavigationComponent]
})
export class SharedModule {}
