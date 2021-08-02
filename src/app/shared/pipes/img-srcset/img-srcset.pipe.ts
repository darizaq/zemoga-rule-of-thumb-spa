import { Pipe, PipeTransform } from '@angular/core';

import { ImageResource } from '@core/interfaces';

@Pipe({ name: 'imgSrcset' })
export class ImgSrcsetPipe implements PipeTransform {
  /**
   * Builds img srcset property value based on resources array
   *
   * @param resources - Img resources array
   * @returns Srcset value
   */
  public transform(resources: ImageResource[]): string {
    return Array.isArray(resources) ? this.getSrcsetValue(resources) : '';
  }

  /**
   * Obtains image srcset property value
   *
   * @param resources - Image resources array
   * @returns Formatted srcset value
   */
  private getSrcsetValue(resources: ImageResource[]): string {
    return resources
      .reduce((accum: string[], { url, size }: ImageResource) => [...accum, `${url} ${size}`], [])
      .join(', ');
  }
}
