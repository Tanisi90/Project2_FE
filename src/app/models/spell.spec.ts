import { Spell } from './spell';

describe('Spell', () => {
  it('should create an instance', () => {
    expect(new Spell("", [], [], 0, [], "", false, "", false, "", 0, "", "", "")).toBeTruthy();
  });
});
