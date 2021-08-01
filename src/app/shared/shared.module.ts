import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerMainComponent } from './components/banner-main/banner-main.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BannerSupplementalComponent } from './components/banner-supplemental/banner-supplemental.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BannerMainComponent,
    BannerSupplementalComponent,
    FeaturedCardComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  exports: [
    BannerMainComponent,
    BannerSupplementalComponent,
    FeaturedCardComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ]
})
export class SharedModule {}
