import React from 'react'


export const PriorityBadge=({ priority })=> {
const base= 'px-2 py-0.5 rounded-full text-xs font-semibold'
if (priority=== 'High') return<span className={`${base} bg-red-100 text-red-700`}>HIGH</span>
if (priority=== 'Medium') return<span className={`${base} bg-yellow-100 text-yellow-700`}>MEDIUM</span>
return <span className={`${base} bg-green-100 text-green-700`}>LOW</span>
}


export const StatusPill= ({ status }) => {
const base= 'px-2 py-0.5 rounded-full text-xs font-medium'
if (status=== 'Open') return <span className={`${base} bg-green-50 text-green-700`}>Open</span>
if (status=== 'In-Progress') return <span className={`${base} bg-yellow-50 text-yellow-700`}>In-Progress</span>
return <span className={`${base} bg-gray-100 text-gray-700`}>Resolved</span>
}