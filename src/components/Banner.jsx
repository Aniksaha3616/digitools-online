export default function Banner() {
  return (
    <div className="px-20  bg-gray-50">
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16   ">
      
      
      <div className="max-w-lg">
        <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
          New: AI-Powered Tools Available
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6 leading-tight">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-gray-500 mt-4">
          Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br />
            Explore Products
        </p>

        
        <div className="flex gap-4 mt-6">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
            Explore Products
          </button>

          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition flex items-center gap-2">
            <span><img src="/src/assets/Play.png" alt="" /></span> Watch Demo
          </button>
        </div>
      </div>

      
      <div className="mt-10 md:mt-0">
        <img
          src="/src/assets/banner.png"
          alt="Digital Tools"
          className="w-100 md:w-112.5 rounded-lg shadow"
        />
      </div>
    </section>
    </div>
  );
}