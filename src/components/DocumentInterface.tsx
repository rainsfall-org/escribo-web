export default function DocumentInterface() {
  return (
    <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl w-[600px] h-[350px] z-10">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-black font-medium">escribo</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">⏸</span>
          </div>
          <div className="w-8 h-8 bg-[#988361] rounded-full flex items-center justify-center">
            <span className="text-white text-xs">👤</span>
          </div>
          <div className="bg-[#988361] text-white px-4 py-2 rounded-lg text-sm font-medium">
            Book Preview 📖
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex h-[290px]">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 p-4 border-r border-gray-200">
          <div className="text-sm text-gray-600 mb-3">MANUSCRIPT</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">📄</span>
              <span className="text-black">Part 1: The Beginning</span>
            </div>
            <div className="flex items-center gap-2 text-sm ml-4">
              <span className="text-gray-400">1</span>
              <span className="text-black">Chapter 1</span>
            </div>
            <div className="flex items-center gap-2 text-sm ml-4">
              <span className="text-gray-400">2</span>
              <span className="text-black">Chapter 1</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          <div className="text-[#988361] text-sm mb-2 flex items-center gap-2">
            <span className="bg-[#988361] text-white px-2 py-1 rounded text-xs">5 chapters</span>
            <span>→ 5,863 words</span>
          </div>

          <h2 className="text-black font-semibold mb-3">When Ocean Meets the Sun</h2>

          <div className="text-gray-700 text-sm leading-relaxed">
            <p className="mb-3">
              The signal first arrived as a faint whisper, buried deep within the static of space. At first, the astronomers dismissed it as interference,
              another meaningless pulse from some distant pulsar. But as the days passed, the whisper grew clearer, repeating the same pattern: a
              complex algorithmic sequence that defied natural explanation. It was a mathematical proof, elegant and undeniable, written in the
              universal language of numbers.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
              </div>
              <button className="bg-[#988361] text-white px-3 py-1 rounded text-xs">
                Continue this
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}