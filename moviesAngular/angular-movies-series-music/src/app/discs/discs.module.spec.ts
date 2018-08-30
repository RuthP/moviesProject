import { DiscsModule } from './discs.module';

describe('DiscsModule', () => {
  let discsModule: DiscsModule;

  beforeEach(() => {
    discsModule = new DiscsModule();
  });

  it('should create an instance', () => {
    expect(discsModule).toBeTruthy();
  });
});
