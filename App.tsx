import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'النظام الملكي نشط. دمج محركات البحث، الصور، والذكاء اللغوي جاهز لأوامرك.' }
  ]);
  const [input, setInput] = useState('');
  const [showSubscription, setShowSubscription] = useState(false);

  // وظيفة إرسال الرسائل (دمج ذكاء شامل)
  const handleSend = () => {
    if (!input) return;
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // محاكاة استجابة التنين (توليد، بحث، برمجة)
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'ai', 
        text: 'جاري معالجة أمرك باستخدام القدرات الملكية المدمجة... (هذه الواجهة جاهزة للربط بـ API السيرفر).' 
      }]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-[#050000] text-white font-sans rtl">
      
      {/* القائمة الجانبية (Sidebar) */}
      <aside className="w-72 bg-[#0a0000] border-l border-red-900/20 flex flex-col p-4">
        <button onClick={() => setMessages([{role:'ai', text:'محادثة جديدة بدأت...'}])} 
          className="w-full p-4 bg-red-950/30 border border-red-600/30 rounded-2xl hover:bg-red-600/20 transition flex items-center justify-between mb-8 group">
          <span className="font-bold text-sm">NEW CHAT</span>
          <i className="fas fa-edit text-xs"></i>
        </button>
        
        <div className="flex-1 overflow-y-auto space-y-3">
          <p className="text-[10px] text-gray-600 font-bold px-2 uppercase tracking-widest">سجل المحادثات</p>
          {['مشروع ديسكورد الملكي 🐉', 'توليد صور التنين'].map((chat, i) => (
            <div key={i} className="p-3 hover:bg-red-950/20 rounded-xl cursor-pointer text-sm text-gray-400 border-r-2 border-transparent hover:border-red-600 transition">
              {chat}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold shadow-lg shadow-red-600/20">KG</div>
          <div className="text-xs">
            <p className="font-bold">المسؤول الملكي</p>
            <p className="text-green-500 text-[10px]">● متصل الآن</p>
          </div>
        </div>
      </aside>

      {/* المنطقة الرئيسية */}
      <main className="flex-1 flex flex-col relative">
        <header className="p-4 flex justify-between items-center bg-black/40 backdrop-blur-md z-20">
          <div className="flex items-center gap-2">
            <i className="fas fa-dragon text-red-600 text-xl"></i>
            <span className="font-black text-lg tracking-tighter">AI DRAGON <span className="text-red-600">CORE</span></span>
          </div>
          
          {/* زر الاشتراك الفعال */}
          <button 
            onClick={() => setShowSubscription(!showSubscription)}
            className="bg-gradient-to-r from-red-800 to-red-600 px-6 py-2 rounded-full text-[11px] text-white font-black shadow-lg hover:scale-105 transition">
            <i className="fas fa-crown ml-2"></i> الاشتراك الملكي
          </button>
        </header>

        {/* واجهة الاشتراكات (تظهر عند الضغط) */}
        {showSubscription && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-[#0f0000] border border-red-600/30 p-8 rounded-3xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <button onClick={() => setShowSubscription(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white">✕</button>
              
              {[
                {name: 'الملكي البرو', price: '9.99$', features: 'سرعة أساسية + محرك بحث'},
                {name: 'الملكي الذهبي', price: '19.99$', features: 'توليد صور عالي الدقة + برمجة'},
                {name: 'الملكي البريميوم', price: '29.99$', features: 'كل المميزات + أولوية الديسكورد'}
              ].map((plan, i) => (
                <div key={i} className="p-6 rounded-2xl bg-red-950/10 border border-red-600/20 hover:border-red-600 transition flex flex-col text-center">
                  <h3 className="text-lg font-black mb-2">{plan.name}</h3>
                  <p className="text-2xl font-bold text-red-500 mb-4">{plan.price}</p>
                  <p className="text-xs text-gray-400 mb-6 flex-1">{plan.features}</p>
                  <button className="w-full py-3 bg-red-600 rounded-xl font-bold text-sm">اختيار الخطة</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* منطقة الرسائل التفاعلية */}
        <div className="flex-1 overflow-y-auto p-6 md:px-32 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'ai' ? 'animate-fade-in' : ''}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-red-600/20 text-red-500' : 'bg-white/10'}`}>
                {msg.role === 'ai' ? '🐉' : '👤'}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-500 uppercase">{msg.role === 'ai' ? 'AI DRAGON CORE' : 'أنت'}</p>
                <div className="text-gray-200 text-sm leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* صندوق الإدخال الملكي */}
        <div className="p-6 md:px-32 lg:px-64">
          <div className="bg-[#111] rounded-3xl p-2 flex items-end gap-2 border border-red-900/20 shadow-2xl">
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent p-4 text-white outline-none resize-none placeholder:text-gray-700 text-sm" 
              placeholder="اطلب صوراً، ابحث، أو دردش..." 
              rows={1}
            />
            <button onClick={handleSend} className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center hover:bg-red-500 transition shadow-lg mb-1">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <div className="flex justify-center gap-6 mt-4 opacity-40">
            <button className="text-[10px] hover:text-red-500 transition"><i className="fas fa-search ml-1"></i> محرك بحث</button>
            <button className="text-[10px] hover:text-red-500 transition"><i className="fas fa-image ml-1"></i> توليد صور</button>
            <button className="text-[10px] hover:text-red-500 transition"><i className="fas fa-code ml-1"></i> برمجة</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
