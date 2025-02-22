import React from "react";

const Engineering = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-blue-600/50 via-gray-700 to-violet-600/50 text-white min-h-screen p-8">
      <h1 className="text-5xl font-extrabold mb-10 text-center drop-shadow-lg">
        Engineering Courses
      </h1>

      <div className="mb-8 bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md space-y-6">
        <h2 className="text-3xl font-semibold mb-5">Top Engineering Courses</h2>
        <ul className="list-disc list-inside text-white/80">
          <li>Computer Science and Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Civil Engineering</li>
          <li>Electrical Engineering</li>
          <li>Electronics and Communication Engineering</li>
          <li>Biomedical Engineering</li>
          <li>Aerospace Engineering</li>
          <li>Artificial Intelligence</li>
          <li>Robotics and Automation Engineering</li>
          <li>Chemical Engineering</li>
        </ul>
      </div>
    </div>
  );
};

export default Engineering;
