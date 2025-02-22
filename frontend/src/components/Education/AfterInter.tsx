import React from 'react';
import { ClipboardList, Clock, BookOpen, CircuitBoard, Rocket, Cpu, Settings, Atom, BrainCircuit, FlaskConical } from 'lucide-react';

// interface CourseItem {
//   icon: React.ReactNode;
//   name: string;
// }

const AfterInter: React.FC = () => {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <header className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
          Post-Intermediate Career Paths
        </h1>
        <p className="text-xl text-gray-300">Your gateway to engineering and professional education</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        {/* Entrance Exams Section */}
        <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="text-blue-400" size={32} />
            <h2 className="text-3xl font-bold">Engineering Entrance Exams</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="exam-card bg-gradient-to-br from-blue-800/50 to-purple-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-purple-300" size={24} />
                <h3 className="text-xl font-semibold">JEE Mains & Advanced</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-4 h-4" />
                <span>3-hour exam | Physics, Chemistry, Mathematics</span>
              </div>
            </div>

            <div className="exam-card bg-gradient-to-br from-green-800/50 to-teal-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="text-green-300" size={24} />
                <h3 className="text-xl font-semibold">NEET & Medical Exams</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-4 h-4" />
                <span>3.5-hour exam | Biology, Physics, Chemistry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Courses Section */}
        <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <CircuitBoard className="text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">Top Engineering Disciplines</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <Cpu className="w-5 h-5" />, name: 'Computer Science' },
              { icon: <Rocket className="w-5 h-5" />, name: 'Aerospace' },
              { icon: <Settings className="w-5 h-5" />, name: 'Mechanical' },
              { icon: <Atom className="w-5 h-5" />, name: 'Chemical' },
              { icon: <BrainCircuit className="w-5 h-5" />, name: 'AI & Robotics' },
              { icon: <FlaskConical className="w-5 h-5" />, name: 'Biomedical' },
            ].map((course, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="text-blue-400">{course.icon}</div>
                <span className="text-gray-300">{course.name}</span>
                <button className="ml-auto text-sm bg-blue-600/30 hover:bg-blue-600/50 px-3 py-1 rounded-full">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-4">Career Pathways</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-white/5 rounded-lg">
              <h4 className="font-semibold mb-2">Research & Development</h4>
              <p className="text-gray-400">Innovate in tech labs and research institutions</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <h4 className="font-semibold mb-2">Higher Education</h4>
              <p className="text-gray-400">Pursue M.Tech/MS/MBA after B.Tech</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <h4 className="font-semibold mb-2">Entrepreneurship</h4>
              <p className="text-gray-400">Start tech ventures and startups</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AfterInter;