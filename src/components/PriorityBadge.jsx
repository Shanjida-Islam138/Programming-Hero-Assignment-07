
import React from 'react';

export const PriorityBadge = ({ priority }) => {
  const base = 'px-2 py-0.5 rounded-full text-xs font-semibold';
  if (priority === 'High') return <span className={`${base} bg-red-100 text-red-700`}>HIGH</span>;
  if (priority === 'Medium') return <span className={`${base} bg-yellow-100 text-yellow-700`}>MEDIUM</span>;
  return <span className={`${base} bg-green-100 text-green-700`}>LOW</span>;
};