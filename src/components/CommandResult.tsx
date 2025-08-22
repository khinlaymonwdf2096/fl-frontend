import type { ParsedAction } from "../types/parse-action";

type CommandResultProps={
    actions:ParsedAction[],
   
}
const CommandResult = ({actions}:CommandResultProps) => {
  
    return (
        <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Command Log:</h3>
        {actions.length > 0 ? (
          <ul className="bg-gray-50 p-4 rounded-lg space-y-3">
            {actions.map((action) => (
              <li key={action.id} className={`flex items-start p-3 rounded-md ${action.isValid ? 'bg-green-100' : 'bg-red-100'}`}>
                <span className={`mr-3 text-xl ${action.isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {action.isValid ? '✓' : '✗'}
                </span>
                <div>
                    <p className={`font-medium ${action.isValid ? 'text-gray-800' : 'text-red-800'}`}>{action.description}</p>
                    {!action.isValid && action.error && (
                        <p className="text-sm text-red-700 mt-1">{action.error}</p>
                    )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Enter a command and click "Parse" to see the log.</p>
        )}
      </div>
    );
  };
  export default CommandResult;