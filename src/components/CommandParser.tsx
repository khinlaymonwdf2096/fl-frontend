import React, { useState } from 'react';
import type { ParsedAction } from '../types/parse-action';
import { parseCommandString } from '../utilities/parse-command';
import CommandInput from './CommandInput';
import CommandResult from './CommandResult';
// import { parseCommand } from '../api/forkliftApi';
// import ParsedActions from './ParsedActions';

// const CommandInput: React.FC = () => {
//   const [command, setCommand] = useState('');
//   const [actions, setActions] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleParse = async () => {
//     setLoading(true);
//     try {
//       const result = await parseCommand(command);
//       setActions(result);
//     } catch {
//       alert('Failed to parse command.');
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       <h3>Forklift Movement Command Interpreter</h3>
//       <input
//         type="text"
//         aria-label="Forklift command"
//         placeholder="e.g., 5B09L09R01F"
//         value={command}
//         onChange={e => setCommand(e.target.value)}
//         style={{width: '220px'}}
//       />
//       <button type="button" onClick={handleParse} disabled={loading || !command} style={{ marginLeft: "1em" }}>
//         Parse
//       </button>
//       {actions.length > 0 && <ParsedActions actions={actions} />}
//     </div>
//   );
// };
// Command Control and Log Component

// Defines the structure for a parsed command action.




const CommandParser = () => {
  const [command, setCommand] = useState<string>('F10R90L90B5');
  const [actions, setActions] = useState<ParsedAction[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedActions = parseCommandString(command);
    setActions(parsedActions);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Movement Command Parser</h2>
      
        <CommandInput command={command} handleSubmit={handleSubmit} setCommand={setCommand}/>
            
        <CommandResult actions={actions}/>

    </div>
  );
};
export default CommandParser;
