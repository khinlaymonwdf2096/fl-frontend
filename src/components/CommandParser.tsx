import React, { useState } from 'react';
import type { ParsedAction } from '../types/parse-action';
import { parseCommandString } from '../utilities/parse-command';
import CommandInput from './CommandInput';
import CommandResult from './CommandResult';

const CommandParser = () => {
  const [command, setCommand] = useState<string>('');
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
