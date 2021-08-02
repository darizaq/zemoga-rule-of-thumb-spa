import { TestBed } from '@angular/core/testing';

import { ImageResource } from '@core/interfaces';
import { ImgSrcsetPipe } from './img-srcset.pipe';
import { mockResources } from '@mocks/image-resources.mock';

describe('ImgSrcsetPipe', () => {
  let pipe: ImgSrcsetPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgSrcsetPipe]
    });

    pipe = TestBed.inject(ImgSrcsetPipe);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return srcset value', () => {
    const expected = '/path/img-resource 1x, /path/img-resource@2X 2x';
    const result = pipe.transform(mockResources);

    expect(result).toEqual(expected);
  });

  it('should return empty srcset value', () => {
    const result = pipe.transform({} as Array<ImageResource>);

    expect(result).toEqual('');
  });
});
