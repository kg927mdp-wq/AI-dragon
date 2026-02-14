import React, { useState, useEffect } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'النظام الملكي متصل. المحرك السري النشط (Dragon-X) يدمج الآن كل القدرات العالمية. كيف يمكنني خدمتك؟' }
  ]);
  const [input, setInput] = useState('');
  const [showSubscription, setShowSubscription] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // نظام الاشتراكات الملكية الثلاثة
  const plans = [
    { name: 'الملكي البرو', price: '9.99$', features: ['محرك بحث لحظي', 'تحليل بيانات معقدة'], color: 'text-red-400' },
    { name: 'الملكي الذهبي', price: '19.99$', features: ['توليد صور 4K سري', 'برمجة أنظمة كاملة'], color: 'text-yellow-500' },
    { name: 'الملكي البريميوم', price: '29.99$', features: ['المحرك السري Dragon-X', 'أولوية معالجة قصوى'], color: 'text-white' }
  ];

  const handleAction = (type: string) => {
    const actions: {[key: string]: string} = {
      search: "جاري تشغيل محرك البحث الشامل...",
      image: "جاري استدعاء محرك الصور السري...",
      code: "جاري تفعيل بيئة البرمجة المتقدمة..."
    };
    setMessages([...messages, { role: 'ai', text: actions[type] }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // محاكاة استجابة المحرك السري المدمج
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'ai', 
        text: 'بناءً على قدرات المحرك السري المدمجة، تم تحليل طلبك وتنفيذه بدقة تفوق المعايير المعتادة.' 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-[#050000] text-white font-sans rtl overflow-hidden">
      
      {/* القائمة الجانبية - شغالة بالكامل */}
      <aside className="w-72 bg-[#0a0000] border-l border-red-900/20 flex flex-col p-4 shadow-2xl">
        <button onClick={() => setMessages([{role:'ai', text:'بدء محادثة جديدة عبر المحرك السري...'}])} 
          className="w-full p-4 bg-red-950/20 border border-red-600/30 rounded-2xl hover:bg-red-600/40 transition-all flex items-center justify-between mb-8 group">
          <span className="font-black text-xs">NEW CHAT</span>
          <i className="fas fa-plus group-hover:rotate-90 transition-transform"></i>
        </button>
        
        <div className="flex-1 overflow-y-auto space-y-3">
          <p className="text-[10px] text-gray-600 font-bold px-2 uppercase tracking-widest">السجل الملكي</p>
          <div className="p-3 bg-red-600/5 rounded-xl text-xs text-red-500 border border-red-600/20 cursor-pointer">مشروع ديسكورد الملكي 🐉</div>
        </div>

        <div className="mt-auto pt-4 border-t border-red-900/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold">KG</div>
          <div className="text-[10px]">
            <p className="font-black text-white">المسؤول الملكي</p>
            <p className="text-green-500">متصل الآن</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative">
        <header className="p-5 flex justify-between items-center bg-black/40 backdrop-blur-md z-40 border-b border-red-900/10">
          <div className="flex items-center gap-3">
            <i className="fas fa-dragon text-red-600 text-2xl animate-pulse"></i>
            <span className="font-black text-xl italic uppercase">AI Dragon <span className="text-red-600 text-sm">Core V2</span></span>
          </div>
          
          {/* زر الاشتراك الملكي الفعال */}
          <button onClick={() => setShowSubscription(true)}
            className="bg-gradient-to-r from-red-800 to-red-600 px-6 py-2.5 rounded-full text-[10px] font-black shadow-lg hover:scale-105 transition-all active:scale-95">
            <i className="fas fa-crown ml-2"></i> الاشتراك الملكي
          </button>
        </header>

        {/* لوحة الاشتراكات الثلاثة - تظهر بوضوح عند الضغط */}
        {showSubscription && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6">
            <div className="bg-[#0f0000] border border-red-600/20 p-10 rounded-[40px] max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <button onClick={() => setShowSubscription(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl">✕</button>
              {plans.map((plan, i) => (
                <div key={i} className="p-8 rounded-3xl bg-red-950/10 border border-red-900/20 hover:border-red-600 transition-all flex flex-col items-center">
                  <h3 className={`text-xl font-black mb-2 ${plan.color}`}>{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="text-[10px] text-gray-400 space-y-3 mb-8 flex-1">
                    {plan.features.map((f, idx) => <li key={idx}><i className="fas fa-check text-red-600 ml-2"></i>{f}</li>)}
                  </ul>
                  <button className="w-full py-4 bg-red-600 rounded-2xl font-black text-xs hover:bg-red-500">تفعيل</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* منطقة الدردشة */}
        <div className="flex-1 overflow-y-auto p-6 md:px-40 space-y-8">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-4 rounded-3xl text-sm ${msg.role === 'ai' ? 'bg-white/5 border border-white/5' : 'bg-red-600/10 border border-red-600/20'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && <div className="text-red-600 text-[10px] animate-pulse">المحرك السري يحلل طلبك...</div>}
        </div>

        {/* صندوق الإدخال الملكي والأزرار */}
        <div className="p-8 md:px-40">
          <div className="bg-[#111] rounded-[30px] p-2 flex items-end gap-2 border border-red-900/20 shadow-2xl">
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
              className="flex-1 bg-transparent p-4 text-white outline-none resize-none text-sm" 
              placeholder="اطلب أي شيء من محرك Dragon-X..." 
              rows={1}
            />
            <button onClick={handleSend} className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center hover:bg-red-500 transition-all mb-1">
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
          
          <div className="flex justify-center gap-10 mt-6 opacity-40">
            <button onClick={() => handleAction('search')} className="text-[10px] font-bold hover:text-red-500"><i className="fas fa-search ml-1"></i> محرك بحث</button>
            <button onClick={() => handleAction('image')} className="text-[10px] font-bold hover:text-red-500"><i className="fas fa-image ml-1"></i> توليد صور</button>
            <button onClick={() => handleAction('code')} className="text-[10px] font-bold hover:text-red-500"><i className="fas fa-code ml-1"></i> برمجة</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
