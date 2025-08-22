
type CommandInputProps={
    command:string,
    handleSubmit:(e: React.FormEvent)=>void,
    setCommand:(value:string)=>void
}
const CommandInput = ({command,handleSubmit,setCommand}:CommandInputProps) => {
  
    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="e.g., F10R90L90B5"
          className="flex-grow w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
        >
          Parse Command
        </button>
      </form>
    );
  };
  export default CommandInput;