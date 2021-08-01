import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeaturedCardComponent, HeaderComponent, NavigationComponent],
  exports: [FeaturedCardComponent, HeaderComponent, NavigationComponent]
})
export class SharedModule {}
