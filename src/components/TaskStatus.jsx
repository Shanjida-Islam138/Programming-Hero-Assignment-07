import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const TaskStatus = () => {
  const { taskStatus, resolved, completeTask } = useContext(AppContext);

  const handleComplete = (id) => {
    const done = completeTask(id);
    if (done) {
      toast.success("✅ Task marked as complete!");
    } else {
      toast.error("⚠️ Could not complete task.");
    }
  };

  return (
    <aside className="space-y-6">
      {/* In Progress Section */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-700">Task Status</h3>
        <p className="text-sm text-gray-400 mt-2">
          Select a ticket to add to Task Status.
        </p>

        <div className="mt-4 space-y-3">
          {taskStatus.length === 0 ? (
            <p className="text-sm text-gray-400">No tasks added yet.</p>
          ) : (
            taskStatus.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded"
              >
                <div>
                  <div className="font-medium text-gray-700">{t.title}</div>
                  <div className="text-xs text-gray-500">{t.customer}</div>
                </div>
                <button
                  onClick={() => handleComplete(t.id)}
                  className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                >
                  Complete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Resolved Section */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-700">Resolved Tasks</h3>
        {resolved.length === 0 ? (
          <p className="text-sm text-gray-400 mt-2">No resolved tasks yet.</p>
        ) : (
          <div className="mt-3 space-y-2">
            {resolved.map((r) => (
              <div
                key={r.id}
                className="text-sm text-gray-700 p-2 bg-gray-50 rounded"
              >
                {r.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default TaskStatus;
