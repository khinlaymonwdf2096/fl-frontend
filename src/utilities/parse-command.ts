import type { ParsedAction } from "../types/parse-action";

export const parseCommandString = (command: string): ParsedAction[] => {
    if (!command) return [];
  
    const actions: ParsedAction[] = [];
    // Use a regex to find all command-value pairs (e.g., F10, R90)
    const commandRegex = /([FBLR])(\d+)/gi;
    const matches = command.match(commandRegex);
  
    if (!matches) {
      return [{ 
          id: `invalid-0`, 
          description: `Invalid command format: "${command}"`, 
          isValid: false,
          error: "No valid command codes found. Use F, B, L, R followed by up to 3-digit number."
      }];
    }
  
    matches.forEach((match, index) => {
      const actionCode = match.charAt(0).toUpperCase();
      const value = parseInt(match.slice(1), 10);
      const actionId = `${actionCode}-${value}-${index}`;
  
      switch (actionCode) {
        case 'F':
          actions.push({ id: actionId, description: `Move Forward by ${value} metres.`, isValid: true });
          break;
        case 'B':
          actions.push({ id: actionId, description: `Move Backward by ${value} metres.`, isValid: true });
          break;
        case 'L':
          if (value % 90 === 0 && value <= 360) {
            actions.push({ id: actionId, description: `Turn Left by ${value} degrees.`, isValid: true });
          } else {
            actions.push({ 
              id: actionId, 
              description: `Invalid Left Turn: ${value}°`, 
              isValid: false,
              error: "Turn degrees must be a multiple of 90 (0, 90, 180, 270, 360)."
            });
          }
          break;
        case 'R':
          if (value % 90 === 0 && value <= 360) {
            actions.push({ id: actionId, description: `Turn Right by ${value} degrees.`, isValid: true });
          } else {
            actions.push({ 
              id: actionId, 
              description: `Invalid Right Turn: ${value}°`, 
              isValid: false,
              error: "Turn degrees must be a multiple of 90 (0, 90, 180, 270, 360)."
            });
          }
          break;
        default:
          // This case is unlikely with the regex, but good for safety.
          actions.push({ 
              id: `unknown-${index}`, 
              description: `Unknown command: ${match}`, 
              isValid: false,
              error: `The action code "${actionCode}" is not recognized.`
          });
          break;
      }
    });
  
    return actions;
  };
