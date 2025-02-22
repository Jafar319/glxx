import React from 'react';
import { Atom, Landmark, Palette, Code, FlaskConical, BookOpen, Scale, Network, Laptop, Calculator } from 'lucide-react';

const Degree: React.FC = () => {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <header className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
          Undergraduate Degree Programs
        </h1>
        <p className="text-xl text-gray-300">Explore diverse academic pathways for your future</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
        {/* Science Section */}
        <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="text-blue-400" size={32} />
            <h2 className="text-3xl font-bold">B.Sc - Bachelor of Science</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                <Atom className="w-5 h-5" /> Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['Physics', 'Chemistry', 'Mathematics', 'Statistics'].map((subject, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
                <Laptop className="w-5 h-5" /> Career Paths
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['Research Scientist', 'Data Analyst', 'Chemist', 'Statistician'].map((career, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg text-sm">
                    {career}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Commerce Section */}
        <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Landmark className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold">Commerce & Business Programs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-300 flex items-center gap-2">
                <Calculator className="w-5 h-5" /> Core Degrees
              </h3>
              <div className="grid gap-3">
                {['B.Com General', 'B.Com Computers', 'BBA', 'CA Foundation'].map((program, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-green-400' : 'bg-blue-400'}`} />
                    <span>{program}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                <Network className="w-5 h-5" /> Career Landscape
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Opportunities in finance, entrepreneurship, banking, and corporate management. Ideal for careers in:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Investment Banking', 'Tax Consultancy', 'Business Analytics', 'Corporate Law'].map((field, index) => (
                  <span key={index} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Arts Section */}
        <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-purple-400" size={32} />
            <h2 className="text-3xl font-bold">Arts & Humanities</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Degree Options</h3>
              <div className="grid gap-3">
                {['BA General', 'BFA', 'BHM', 'LLB'].map((program, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <Scale className="w-4 h-4 text-purple-300" />
                    <span>{program}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-300">Career Spectrum</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Journalism', 'Civil Services', 'Museum Curator', 'Social Work'].map((career, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BCA Section */}
        <div className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-2xl p-8 backdrop-blur-lg">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-cyan-400" size={32} />
            <h2 className="text-3xl font-bold">Computer Applications (BCA)</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-300">Curriculum Focus</h3>
              <div className="flex flex-wrap gap-2">
                {['Programming', 'Database Systems', 'Web Development', 'Cloud Computing'].map((topic, index) => (
                  <span key={index} className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300">Career Pathways</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Software Developer', 'IT Consultant', 'System Analyst', 'Network Engineer'].map((role, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg text-sm text-center">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Degree;