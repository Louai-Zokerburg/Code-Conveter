import React from 'react';

import { history } from '../utils.js/history';
import HistoryItem from './HistoryItem';

const History = () => {
  return (
    <ul className='w-full h-[60%] flex flex-col justify-start items-start list-none px-4 pt-4 border-b-2 border-border_color_light dark:border-border_color_dark overflow-y-scroll custom-scrollbar'>
      <h4 className='text-gray-600 dark:text-gray-400 mb-2'>HISTORY</h4>
      {history.map((historyItem) => (
        <HistoryItem
          key={historyItem.id}
          sourLang={historyItem.sourceLang.name}
          targetLang={historyItem.targetLang.name}
        />
      ))}
    </ul>
  );
};

export default History;
