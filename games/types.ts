export interface GameModule {
  id: string;
  difficulties: string[];
  generate(seed: string, difficulty: string): any;
  validate(puzzle: any): boolean;
}
