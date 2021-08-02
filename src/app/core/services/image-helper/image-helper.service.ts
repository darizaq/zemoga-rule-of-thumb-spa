import { Injectable } from '@angular/core';

import { ImageResource } from '@core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImageHelperService {
  /**
   * Generates image resources array
   *
   * @param images - Images object
   * @returns Image resources
   */
  public getImageResources(images: Record<string, string>, basePath: string): Array<ImageResource> {
    return Object.keys(images).map((key: string) =>
      this.getImageResource(images[key], key.replace('resolution', ''), basePath)
    );
  }

  /**
   * Generates image resource
   *
   * @param image - Image file name
   * @param size - Image size descriptor
   * @returns Image resource
   */
  private getImageResource(image: string, size: string, basePath: string): ImageResource {
    return { url: `${basePath}${image}`, size };
  }
}
