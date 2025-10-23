// src/components/TaskStatus.jsx
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const TaskStatus = () => {
    const { taskStatus, resolved, completeTask } = useContext(AppContext);

    const handleComplete = (ticketId) => {
        const success = completeTask(ticketId);
        if (success) {
            // Simplified toast message
            toast.success(`Ticket #${ticketId} resolved.`);
        }
    };
    
    // Custom colors for bullet points
    const IN_PROGRESS_BULLET = "#FEBB0C";
    const RESOLVED_BULLET = "#02A53B"; 

    return (
        <div className="space-y-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Task Status Section (In-Progress) */}
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Task Status</h2> 
                <p className="text-sm text-gray-600 mb-4">Select a ticket to add to Task Status</p>

                {taskStatus.length === 0 ? (
                    <p className="text-sm text-gray-500 mt-2 p-3 border border-gray-100 rounded-lg bg-gray-50">No tickets currently in progress.</p>
                ) : (
                    <div className="space-y-3">
                        {taskStatus.map((task) => (
                            <div key={task.id} className="flex justify-between items-center p-3 border-b border-gray-100 last:border-b-0 bg-white rounded-lg shadow-sm">
                                <p className="text-sm text-gray-800 font-medium flex items-center gap-2">
                                    {/* In-Progress Bullet */}
                                    <span style={{ 
                                        height: '8px', 
                                        width: '8px', 
                                        borderRadius: '50%', 
                                        backgroundColor: IN_PROGRESS_BULLET 
                                    }}></span>
                                    <span className="font-light text-gray-500">#{task.id}:</span> {task.title}
                                </p>
                                <button
                                    onClick={() => handleComplete(task.id)}
                                    className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold transition"
                                    title="Mark as Resolved"
                                >
                                    Resolve
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* --- Separator --- */}
            <div className="border-t border-gray-200"></div> 

            {/* Resolved Task Section */}
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Resolved Task</h2>
                
                {resolved.length === 0 ? (
                    <p className="text-sm text-gray-500 mt-2">No resolved tasks yet.</p>
                ) : (
                    <div className="space-y-3">
                        {resolved.map((task) => (
                            <div key={task.id} className="flex justify-between items-center p-3 border-b border-gray-100 last:border-b-0 bg-white rounded-lg shadow-sm opacity-70">
                                <p className="text-sm text-gray-600 line-through flex items-center gap-2">
                                    {/* Resolved Bullet */}
                                    <span style={{ 
                                        height: '8px', 
                                        width: '8px', 
                                        borderRadius: '50%', 
                                        backgroundColor: RESOLVED_BULLET 
                                    }}></span>
                                    <span className="font-light text-gray-400">#{task.id}:</span> {task.title}
                                </p>
                                <span className="text-xs text-green-600 font-medium">DONE</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskStatus;