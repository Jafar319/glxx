import React from 'react';
import { Cpu, Settings, CircuitBoard, Satellite, Syringe, Atom, BrainCircuit, Rocket, Factory, BatteryCharging } from 'lucide-react';

// interface EngineeringCourse {
//   name: string;
//   icon: React.ReactNode;
//   fields: string[];
// }

const Engineering: React.FC = () => {
  const engineeringCourses = [
    { name: 'Computer Science', icon: <Cpu className="w-6 h-6" />, fields: ['AI/ML', 'Cybersecurity', 'Cloud Computing'] },
    { name: 'Mechanical', icon: <Settings className="w-6 h-6" />, fields: ['Automotive', 'Robotics', 'Thermal'] },
    { name: 'Civil', icon: <CircuitBoard className="w-6 h-6" />, fields: ['Structural', 'Transportation', 'Environmental'] },
    { name: 'Electrical', icon: <BatteryCharging className="w-6 h-6" />, fields: ['Power Systems', 'IoT', 'Renewables'] },
    { name: 'Electronics', icon: <Satellite className="w-6 h-6" />, fields: ['VLSI', 'Embedded Systems', '5G'] },
    { name: 'Biomedical', icon: <Syringe className="w-6 h-6" />, fields: ['Prosthetics', 'Imaging', 'Biomaterials'] },
    { name: 'Aerospace', icon: <Rocket className="w-6 h-6" />, fields: ['Aerodynamics', 'Avionics', 'Space Tech'] },
    { name: 'AI & Robotics', icon: <BrainCircuit className="w-6 h-6" />, fields: ['Automation', 'Neural Networks', 'CV'] },
    { name: 'Chemical', icon: <Atom className="w-6 h-6" />, fields: ['Petrochemicals', 'Nanotech', 'Polymers'] },
    { name: 'Industrial', icon: <Factory className="w-6 h-6" />, fields: ['Supply Chain', 'Quality', 'Operations'] }
  ];


  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <header className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
          Engineering Disciplines
        </h1>
        <p className="text-xl text-gray-300">Explore cutting-edge engineering specializations</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
        <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="text-blue-400" size={32} />
            <h2 className="text-3xl font-bold">Top Engineering Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {engineeringCourses.map((course, index) => (
              <div 
                key={index}
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">{course.icon}</div>
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.fields.map((field, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-lg">
          <h2 className="text-3xl font-bold mb-6">Emerging Engineering Fields</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Quantum Engineering',
              'Sustainable Energy Systems',
              'Biomechatronics',
              'Space Architecture',
              'Cyber-Physical Systems',
              'Nanomedicine'
            ].map((field, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg text-center">
                {field}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Engineering;