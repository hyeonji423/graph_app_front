import './App.css';
import Sidebar from './components/baselayout/Sidebar';

function App() {
  return (
    <div className="App w-screen flex items-center justify-center flex-col dark:bg-neutral-800 dark:text-white">
      <div className='page-wrapper min-h-screen flex w-full'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
