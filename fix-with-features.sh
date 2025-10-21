#!/bin/bash

echo "🎯 بدء الإصلاح المتقدم مع الوظائف..."

# استعادة النسخة الأصلية
cp src/App.jsx.backup src/App.jsx

# إضافة state للوظائف بعد سطر activeModule
sed -i '/const \[activeModule, setActiveModule\] = useState(/a\
  const [showSettings, setShowSettings] = useState(false)\
  const [showInvoice, setShowInvoice] = useState(false)\
  const [showBooking, setShowBooking] = useState(false)\
  const [showHajjForm, setShowHajjForm] = useState(false)' src/App.jsx

# إضافة الدوال قبل renderActiveModule
sed -i '/const renderActiveModule = () => {/i\
  const handleSettings = () => {\
    setShowSettings(true);\
    console.log("فتح الإعدادات");\
  }\
\
  const handleInvoice = () => {\
    setShowInvoice(true);\
    console.log("فتح إنشاء فاتورة");\
  }\
\
  const handleBooking = () => {\
    setShowBooking(true);\
    console.log("فتح نموذج الحجز");\
  }\
\
  const handleHajjRegistration = () => {\
    setShowHajjForm(true);\
    console.log("فتح تسجيل حاج");\
  }' src/App.jsx

# إضافة النوافذ المنبثقة قبل </main>
sed -i '/<\/main>/i\
        {/* النوافذ المنبثقة */}\
        {showSettings && (\
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">\
            <div className="bg-white rounded-lg p-6 w-96">\
              <h3 className="text-lg font-bold mb-4">الإعدادات</h3>\
              <p>هنا توجد إعدادات النظام...</p>\
              <div className="mt-4 flex justify-end">\
                <Button onClick={() => setShowSettings(false)}>إغلاق</Button>\
              </div>\
            </div>\
          </div>\
        )}\
\
        {showInvoice && (\
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">\
            <div className="bg-white rounded-lg p-6 w-96">\
              <h3 className="text-lg font-bold mb-4">إنشاء فاتورة جديدة</h3>\
              <p>نموذج إنشاء الفاتورة...</p>\
              <div className="mt-4 flex justify-end">\
                <Button onClick={() => setShowInvoice(false)}>إغلاق</Button>\
              </div>\
            </div>\
          </div>\
        )}' src/App.jsx

echo "✅ تم الإصلاح المتقدم!"
echo "🚀 يمكنك الآن تشغيل: npm run dev"
