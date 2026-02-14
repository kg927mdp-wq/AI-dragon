import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'النظام الملكي متصل. المحرك السري (Dragon-X) نشط الآن لخدمتك.' }
  ]);
  const [input, setInput] = useState('');
  const [showSubscription, setShowSubscription] = useState(false);

  // نظام الاشتراكات الثلاثة [طلب المستخدم]
  const plans = [
    { name: 'الملكي البرو', price: '9.99$', features: ['محرك بحث لحظي', 'ذكاء سريع'], color: 'text-red-400' },
    { name: 'الملكي الذهبي', price: '19.99$', features: ['توليد صور 4K', 'برمجة متقدمة'], color: 'text-yellow-500' },
    { name: 'الملكي البريميوم', price: '29.99$', features: ['محرك Dragon-X السري', 'أولوية ديسكورد'], color: 'text-white' }
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: 'user', text: input }];
    setMessages(newMsgs);
    setInput('');
    
    // رد المحرك السري المدمج
    setTimeout(() => {
      setMessages([...newMsgs, { 
        role: 'ai', 
        text: 'بأمر من المحرك السري: تم تحليل طلبك وتنفيذه بقدرات تفوق الذكاء التقليدي.' 
      }]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-[#050000] text-white font-sans rtl overflow-hidden">
      
      {/* القائمة الجانبية */}
      <aside className="w-72 bg-[#0a0000] border-l border-red-900/20 flex flex-col p-4 shadow-2xl">
        <button onClick={() => setMessages([{role:'ai', text:'محادثة ملكية جديدة بدأت...'}])} 
          className="w-full p-4 bg-red-950/20 border border-red-600/30 rounded-2xl mb-8 flex items-center justify-between group hover:bg-red-600/20 transition">
          <span className="font-black text-xs">NEW CHAT</span>
          <i className="fas fa-plus group-hover:rotate-90 transition"></i>
        </button>
        <div className="flex-1 overflow-y-auto space-y-3">
          <p className="text-[10px] text-gray-600 font-bold px-2 uppercase tracking-widest">السجل</p>
          <div className="p-3 bg-red-600/5 rounded-xl text-xs text-red-500 border border-red-600/20">مشروع ديسكورد الملكي 🐉</div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative">
        <header className="p-5 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-red-900/10">
          <div className="flex items-center gap-3">
            <i className="fas fa-dragon text-red-600 text-2xl animate-pulse"></i>
            <span className="font-black text-xl italic uppercase tracking-tighter">AI DRAGON <span className="text-red-600 text-sm font-bold">CORE</span></span>
          </div>
          
          {/* زر الاشتراك الملكي - شغال */}
          <button onClick={() => setShowSubscription(true)}
            className="bg-gradient-to-r from-red-800 to-red-600 px-6 py-2.5 rounded-full text-[10px] font-black shadow-lg hover:scale-105 transition">
            <i className="fas fa-crown ml-2"></i> الاشتراك الملكي
          </button>
        </header>

        {/* لوحة الاشتراكات [طلب المستخدم] */}
        {showSubscription && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-6">
            <div className="bg-[#0f0000] border border-red-600/20 p-10 rounded-[40px] max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <button onClick={() => setShowSubscription(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl">✕</button>
              {plans.map((plan, i) => (
                <div key={i} className="p-8 rounded-3xl bg-red-950/10 border border-red-900/20 hover:border-red-600 transition flex flex-col items-center">
                  <h3 className={`text-xl font-black mb-2 ${plan.color}`}>{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="text-[10px] text-gray-400 space-y-3 mb-8 flex-1">
                    {plan.features.map((f, idx) => <li key={idx}><i className="fas fa-check text-red-600 ml-2"></i>{f}</li>)}
                  </ul>
                  <button className="w-full py-4 bg-red-600 rounded-2xl font-black text-xs">تفعيل</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* منطقة الدردشة */}
        <div className="flex-1 overflow-y-auto p-6 md:px-40 space-y-8">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-5 rounded-3xl text-sm ${msg.role === 'ai' ? 'bg-white/5 border border-white/5' : 'bg-red-600/20 border border-red-600/40 shadow-lg shadow-red-900/10'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* الإدخال والأدوات */}
        <div className="p-8 md:px-40">
          <div className="bg-[#111] rounded-[30px] p-2 flex items-end gap-2 border border-red-900/20 shadow-2xl">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
              className="flex-1 bg-transparent p-4 text-white outline-none resize-none text-sm" placeholder="اطلب من محرك Dragon-X..." rows={1} />
            <button onClick={handleSend} className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center hover:bg-red-500 transition mb-1">
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
          <div className="flex justify-center gap-10 mt-6 opacity-30">
            <span className="text-[10px] font-bold"><i className="fas fa-search ml-1"></i> محرك بحث</span>
            <span className="text-[10px] font-bold"><i className="fas fa-image ml-1"></i> توليد صور</span>
            <span className="text-[10px] font-bold"><i className="fas fa-code ml-1"></i> برمجة</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;