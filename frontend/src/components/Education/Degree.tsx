import React from "react";

const Degree = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-blue-600/50 via-gray-700 to-violet-600/50 text-white min-h-screen p-8">
      <h1 className="text-5xl font-extrabold mb-10 text-center drop-shadow-lg">
        Degree Options
      </h1>
      
      <div className="mb-8 bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md space-y-6">
        <h2 className="text-3xl font-semibold mb-5">B.Sc - Bachelor of Science</h2>
        <p className="text-white/80">Specializations:</p>
        <ul className="list-disc list-inside text-white/80">
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Mathematics</li>
          <li>Statistics</li>
          <li>Applied Physics</li>
          <li>Applied Chemistry</li>
          <li>Applied Mathematics</li>
        </ul>
        <p className="text-white/80">Career Opportunities:</p>
        <ul className="list-disc list-inside text-white/80">
          <li>Research Scientist</li>
          <li>Data Analyst</li>
          <li>Mathematician</li>
          <li>Physicist</li>
          <li>Chemist</li>
          <li>Statistician</li>
        </ul>
      </div>

      <div className="mb-8 bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md space-y-6">
        <h2 className="text-3xl font-semibold mb-5">Commerce Stream</h2>
        <ul className="list-disc list-inside text-white/80">
          <li>B.Com - General</li>
          <li>B.Com - Computers</li>
          <li>BBA - Bachelor of Business Administration</li>
          <li>BBM - Bachelor of Business Management</li>
          <li>BMS - Bachelor of Management Studies</li>
          <li>CA - Chartered Accountant</li>
        </ul>
        <p className="text-white/80">Career Opportunities:</p>
        <p className="text-white/80">
          Finance, Business, Accounting, Banking, and Management. Great choice for students interested in economics, trade, investment, taxation, and entrepreneurship.
        </p>
      </div>

      <div className="mb-8 bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md space-y-6">
        <h2 className="text-3xl font-semibold mb-5">Arts and Humanities Stream</h2>
        <ul className="list-disc list-inside text-white/80">
          <li>BA - Bachelor of Arts</li>
          <li>BFA - Bachelor of Fine Arts</li>
          <li>BHM - Bachelor of Hotel Management</li>
          <li>B.Ed - Bachelor of Education</li>
          <li>LLB - Bachelor of Law</li>
        </ul>
        <p className="text-white/80">Career Opportunities:</p>
        <ul className="list-disc list-inside text-white/80">
          <li>Government Jobs & Administration</li>
          <li>Law & Legal Studies</li>
          <li>Media & Journalism</li>
          <li>Psychology & Social Sciences</li>
          <li>Teaching & Education</li>
          <li>Design & Creative Fields</li>
          <li>Business & Management</li>
        </ul>
      </div>

      <div className="mb-8 bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md space-y-6">
        <h2 className="text-3xl font-semibold mb-5">BCA - Bachelor of Computer Applications</h2>
        <p className="text-white/80">
          Focuses on programming, software development, and IT systems. Ideal for those looking to build a career in the IT industry.
        </p>
        <p className="text-white/80">Career Opportunities:</p>
        <ul className="list-disc list-inside text-white/80">
          <li>Software & IT Development</li>
          <li>Networking & IT Infrastructure</li>
          <li>Database Management</li>
          <li>IT Support & Services</li>
          <li>Advanced Studies & Research</li>
        </ul>
      </div>
    </div>
  );
};

export default Degree;
