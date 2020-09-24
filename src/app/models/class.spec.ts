import { Class } from './class';

describe('Class', () => {
  it('should create an instance', () => {
    expect(new Class("", 0, 0, [], [], [], [], [], [], [])).toBeTruthy();
  });
});
