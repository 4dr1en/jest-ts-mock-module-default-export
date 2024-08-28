import { jest, describe, it, expect } from '@jest/globals';

import { startup } from './index';
import start from './start'


jest.mock('./start', () => ({
  __esModule: true,
  default: jest.fn((()=>'start'))
}));

describe('index', () => {
  it('should work', () => {
    expect(startup()).toContain('start');
    expect(start).toHaveBeenCalledTimes(1)
  });
});