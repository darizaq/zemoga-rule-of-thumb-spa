import { TestBed } from '@angular/core/testing';

import { ImageHelperService } from './image-helper.service';
import { mockRulingCard } from '@mocks/ruling-card.mock';

describe('ImageHelperService', () => {
  let service: ImageHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageHelperService]
    });

    service = TestBed.inject(ImageHelperService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get image resources', () => {
    const basePath = 'base/path/';
    const expectedLength = 2;
    const resources = service.getImageResources(mockRulingCard.photo, basePath);

    expect(resources).toBeTruthy();
    expect(resources).toBeInstanceOf(Array);
    expect(resources.length).toEqual(expectedLength);
  });
});
