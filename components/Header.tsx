// components/Header.tsx (example)
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleDarkMode } from '../store/features/uiSlice';

export default function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);

  return (
    <header className={`py-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">Wellfed</div>
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="px-3 py-1 border rounded"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}
