import React, { useState } from 'react';

function App() {
  const [activeModel, setActiveModel] = useState('Gemini');
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'أهلاً بك في AI Dragon. أنا محرك ذكاء اصطناعي مدمج، كيف يمكنني مساعدتك؟' }
  ]);

  return (
    <div className="flex h-screen bg-[#050505] text-white font-sans rtl">
      {/* القائمة الجانبية (مثل ChatGPT) */}
      <aside className="w-72 bg-[#0d0d0d] flex flex-col border-l border-white/5 p-4">
        <button className="flex items-center justify-center gap-2 p-3 border border-white/10 rounded-xl hover:bg-white/5 transition mb-6">
          <span className="text-xl">+</span> دردشة جديدة
        </button>
        
        <div className="flex-1 space-y-2 overflow-y-auto text-sm text-gray-400">
          <div className="p-3 bg-white/5 rounded-lg border-r-2 border-blue-500 text-white cursor-pointer">تحليل المشاعر الأولي</div>
          <div className="p-3 hover:bg-white/5 rounded-lg cursor-pointer transition">استفسارات البرمجة</div>
        </div>

        {/* واجهة الاشتراك البريميوم */}
        <div className="mt-auto p-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
          <h3 className="text-sm font-bold text-blue-400 mb-1">AI-Dragon Pro</h3>
          <p className="text-[10px] text-gray-500 mb-3">احصل على سرعة أعلى ومحركات GPT-4o و DeepSeek V3.</p>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold transition shadow-lg shadow-blue-500/20">
            اشترك الآن
          </button>
        </div>
      </aside>

      {/* منطقة المحادثة الرئيسية */}
      <main className="flex-1 flex flex-col relative">
        {/* اختيار المحرك (الموديل) */}
        <header className="p-4 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex bg-[#111] p-1 rounded-xl border border-white/5">
            {['Gemini', 'DeepSeek', 'ChatGPT'].map((m) => (
              <button 
                key={m}
                onClick={() => setActiveModel(m)}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${activeModel === m ? 'bg-blue-600 text-white shadow-xl' : 'text-gray-500 hover:text-white'}`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">متصل (v1.0.2)</span>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm shadow-inner">KG</div>
          </div>
        </header>

        {/* الرسائل */}
        <div className="flex-1 overflow-y-auto p-6 md:px-20 lg:px-40 space-y-8">
          {chatHistory.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'ai' ? 'animate-fade-in' : ''}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-blue-600/20 text-blue-400' : 'bg-white/10 text-white'}`}>
                {msg.role === 'ai' ? '🐉' : '👤'}
              </div>
              <div className="space-y-2 max-w-full">
                <p className="font-bold text-xs uppercase tracking-widest text-gray-500">{msg.role === 'ai' ? activeModel : 'أنت'}</p>
                <div className="text-gray-200 leading-relaxed text-sm bg-white/5 p-4 rounded-2xl border border-white/5">
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* صندوق الإدخال (Input) */}
        <div className="p-6 md:px-20 lg:px-40 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent">
          <div className="relative group">
            <textarea 
              className="w-full bg-[#111] border border-white/10 rounded-3xl p-5 pr-6 pl-16 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all resize-none shadow-2xl placeholder:text-gray-600"
              placeholder={`اسأل ${activeModel} عن أي شيء...`}
              rows={1}
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all shadow-lg active:scale-95">
              <span className="text-lg">↑</span>
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-700 mt-4 tracking-tight">
            نظام AI Dragon مدعوم بتقنيات المعالجة العصبية المتطورة. قد تختلف النتائج بناءً على المحرك المختار.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
