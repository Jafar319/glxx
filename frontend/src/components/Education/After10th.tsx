import React from 'react';
import { Rocket, BrainCircuit,  GraduationCap, TestTube2, Briefcase, Stethoscope } from 'lucide-react';

// FlaskConical,

interface CareerPillProps {
  icon: React.ReactNode;
  title: string;
}

interface MetricCircleProps {
  value: string;
  label: string;
}

const After10th: React.FC = () => {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <header className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
          Career Pathways After 10th Grade
        </h1>
        <p className="text-xl text-gray-300">Explore your future with our comprehensive guide</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        {/* Stream Cards Section */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="stream-card bg-gradient-to-br from-blue-800/50 to-purple-800/50">
            <div className="card-header">
              <Rocket className="text-blue-400" size={40} />
              <h2 className="text-3xl font-bold">MPC Stream</h2>
              <span className="text-sm text-blue-300">Mathematics, Physics, Chemistry</span>
            </div>
            <div className="card-content">
              <p className="text-gray-300 mb-4">Gateway to engineering, technology, and applied sciences</p>
              <div className="career-grid">
                <CareerPill icon={<Briefcase />} title="Engineering" />
                <CareerPill icon={<GraduationCap />} title="Research" />
                <CareerPill icon={<TestTube2 />} title="Space Tech" />
                <CareerPill icon={<BrainCircuit />} title="AI/ML" />
              </div>
            </div>
          </div>

          <div className="stream-card bg-gradient-to-br from-green-800/50 to-teal-800/50">
            <div className="card-header">
              <Stethoscope className="text-green-400" size={40} />
              <h2 className="text-3xl font-bold">BiPC Stream</h2>
              <span className="text-sm text-green-300">Biology, Physics, Chemistry</span>
            </div>
            <div className="card-content">
              <p className="text-gray-300 mb-4">Pathway to medical, life sciences, and healthcare fields</p>
              <div className="career-grid">
                <CareerPill icon={<Stethoscope />} title="Medicine" />
                <CareerPill icon={<TestTube2 />} title="Biotech" />
                <CareerPill icon={<BrainCircuit />} title="Neuroscience" />
                <CareerPill icon={<GraduationCap />} title="Pharmacy" />
              </div>
            </div>
          </div>
        </section>

        {/* Colleges Section */}
        <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="text-purple-400" /> Top Colleges in AP
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Narayana Junior', 'Siddartha Junior', 'Sri Chaitanya', 'KGBV Vocational'].map((college, index) => (
              <div key={index} className="college-item hover:bg-gray-700/30 transition-colors">
                <span className="text-blue-400">#{index + 1}</span>
                <span className="text-gray-300">{college}</span>
                <button className="ml-auto text-sm bg-blue-600/30 hover:bg-blue-600/50 px-4 py-1 rounded-full">
                  Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Diploma Section */}
        <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="text-green-400" /> Diploma Programs
          </h2>
          <div className="grid gap-6">
            <div className="diagram-card bg-gradient-to-r from-purple-800/50 to-blue-800/50">
              <h3 className="text-xl flex items-center justify-center font-semibold mb-3 mt-7">POLYCET Exam Structure</h3>
              <div className="grid grid-cols-3 gap-4 text-center flex justify-center items-center gap-x-40">
                <MetricCircle value="60" label="Maths" />
                <MetricCircle value="30" label="Physics" />
                <MetricCircle value="30" label="Chemistry" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {['Sasi Institute', 'Aditya Institute', 'MIC College', 'Annamacharya'].map((college, index) => (
                <div key={index} className="college-item hover:bg-gray-700/30 transition-colors">
                  <span className="text-green-400">#{index + 1}</span>
                  <span className="text-gray-300">{college}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const CareerPill: React.FC<CareerPillProps> = ({ icon, title }) => (
  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 my-5 rounded-full hover:bg-white/10 transition-colors mb-2.5">
    {icon}
    <span>{title}</span>
  </div>
);

const MetricCircle: React.FC<MetricCircleProps> = ({ value, label }) => (
  <div className="metric-circle">
    <div className="value">{value}</div>
    <div className="label">{label}</div>
  </div>
);

export default After10th;