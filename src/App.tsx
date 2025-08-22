import ForkliftTable from './components/ForkliftTable';
import ForkliftUploader from './components/ForkliftUploader';
import CommandParser from './components/CommandParser';
import { useForklifts } from './hooks/useForklifts';

const App: React.FC = () => {

  const {data:forklifts,loading,loadForklifts}=useForklifts()

  // // A simple loading spinner component
  const Spinner = () => (
      <div className="flex justify-center items-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
      </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
        Robotic Forklift Control System
        </h1>
      </div>
    </header>
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        {/* Exercise 1 Component */}
        
        <ForkliftUploader onUpload={loadForklifts} />
        

        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Forklift Fleet Inventory</h2>
          {loading ? <Spinner /> : <ForkliftTable forklifts={forklifts} />}
        </div>
        {/* Exercise 2 Component */}
        <CommandParser />
      </div>
    </main>
  </div>
  );
};

export default App;

