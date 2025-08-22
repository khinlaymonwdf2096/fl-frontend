// Defines the structure for a parsed command action.
export interface ParsedAction {
  id: string;
  description: string;
  isValid: boolean;
  error?: string;
}