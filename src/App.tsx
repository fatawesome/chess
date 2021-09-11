import React from 'react';
import { Board } from './components/Board';

const App: React.FC = () => {
  return (
    <div>
      <Board size={8} />
    </div>
  )
}

export default App;
