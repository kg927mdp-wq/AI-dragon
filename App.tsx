import React, { useState } from 'react';

function App() {
  const [model, setModel] = useState('Gemini');
  const [isPremium, setIsPremium] = useState(false);

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* 1. Sidebar (مثل ChatGPT) */}
      <aside className="w-64 bg-[#0d0d0d] p-4 flex flex-col border-l border-white/5">
        <button className="flex items-center gap-2 p-3 border border-white/20 rounded-lg hover:bg-white/5 transition mb-8">
          <i className="fas fa-plus text-xs"></i> دردشة جديدة
        </button>
        
        <div className="flex-1 overflow-y-auto space-y-2 text-sm text-gray-400">
          <div className="p-2 hover:bg-white/5 rounded cursor-pointer">تحليل مشاعر التنين 🐉</div>
          <div className="p-2 hover:bg-white/5 rounded cursor-pointer">مشروع البريميوم الجديد</div>
        </div>

        {/* زر الاشتراك (Subscription) */}
        <div className="mt-auto p-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/30">
          <h3 className="text-xs font-bold text-blue-400 mb-1">AI-Dragon Pro</h3>
          <p className="text-[10px] text-gray-400 mb-3">احصل على وصول لـ GPT-4 و DeepSeek V3</p>
          <button onClick={() => alert('واجهة الدفع قيد التفعيل!')} 
            className="w-full py-2 bg-blue-600 rounded-lg text-xs font-bold hover:bg-blue-700 transition">
            ترقية الاشتراك
          </button>
        </div>
      </aside>

      {/* 2. Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        
        {/* Top Header - اختيار الموديل */}
        <header className="p-4 flex justify-between items-center border-b border-white/5">
          <div className="flex bg-[#1a1a1a] p-1 rounded-xl">
            {['Gemini', 'DeepSeek', 'ChatGPT'].map((m) => (
              <button 
                key={m}
                onClick={() => setModel(m)}
                className={`px-4 py-1.5 rounded-lg text-sm transition ${model === m ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-xs">
            KG
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          <div className="max-w-3xl mx-auto flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
              <i className="fas fa-robot"></i>
            </div>
            <div className="flex-1 space-y-2">
              <p className="font-bold text-sm text-blue-400">{model}</p>
              <p className="text-gray-300 leading-relaxed">
                أهلاً بك في نظام **AI-Dragon**. أنا الآن أعمل بمحرك {model}. كيف يمكنني مساعدتك اليوم؟
              </p>
            </div>
          </div>
        </div>

        {/* Input Field */}
        <div className="p-8">
          <div className="max-w-3xl mx-auto relative">
            <textarea 
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 pr-12 focus:border-blue-500 outline-none transition-all resize-none shadow-2xl"
              placeholder={`اسأل ${model} عن أي شيء...`}
              rows={1}
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 transition">
              <i className="fas fa-arrow-up text-xs"></i>
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-4">
            قد يخطئ الذكاء الاصطناعي أحياناً. تأكد من المعلومات المهمة.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
