import React from 'react';
import SettingsSidebar from "./sidebar-settings";

const CreateNewQuestionnire = () => {
  // Color palette constants based on your image
  const colors = {
    dark: '#2A2A2A',
    forestGreen: '#43624A',
    sageGreen: '#7A9C83',
    cream: '#F5F2EA',
  };

  return (

   <div className="flex min-h-screen bg-[#F5F2EA]">
              {/* Sidebar - Your existing component */}
              <SettingsSidebar />
              <div className="min-h-screen p-4 md:p-8 lg:p-12 font-sans" style={{ backgroundColor: colors.cream }}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.dark }}>
            Create a Custom Form
          </h1>
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold uppercase tracking-wider" style={{ color: colors.forestGreen }}>
              Form Title:
            </label>
            <input
              type="text"
              placeholder="Enter form title"
              className="w-full p-3 rounded-lg border-2 bg-white outline-none transition-all focus:ring-2"
              style={{ 
                borderColor: '#E5E7EB',
                color: colors.dark 
              }}
            />
          </div>
        </header>

        {/* Action Sections */}
        <main className="space-y-10">
          {/* Instructions */}
          <section>
            <button 
              className="flex items-center px-5 py-2.5 rounded-md text-white font-medium transition-transform active:scale-95 shadow-sm"
              style={{ backgroundColor: colors.forestGreen }}
            >
              <span className="mr-2 text-lg">+</span> Add Instructions
            </button>
          </section>

          {/* Standalone Questions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
              Standalone Questions
            </h2>
            <button 
              className="flex items-center px-5 py-2.5 rounded-md text-white font-medium transition-transform active:scale-95 shadow-sm"
              style={{ backgroundColor: colors.forestGreen }}
            >
              <span className="mr-2 text-lg">+</span> Add Standalone Question
            </button>
          </section>

          {/* Sections */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
              Sections
            </h2>
            <button 
              className="flex items-center px-5 py-2.5 rounded-md text-white font-medium transition-transform active:scale-95 shadow-sm"
              style={{ backgroundColor: colors.forestGreen }}
            >
              <span className="mr-2 text-lg">+</span> Add Section
            </button>
          </section>
        </main>

        {/* Footer Actions */}
        <footer className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
          <button 
            className="px-8 py-3 rounded-md text-white font-bold transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: colors.sageGreen }}
          >
            Save
          </button>
          <button 
            className="px-8 py-3 rounded-md text-white font-bold transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: colors.forestGreen }}
          >
            Save and Continue
          </button>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default CreateNewQuestionnire;