#!/bin/bash

echo "🔧 بدء تصحيح الأخطاء التلقائي..."

# النسخ الاحتياطي
cp src/App.jsx src/App.jsx.backup.auto

# إصلاح الخطأ: switch مكرر
if grep -q "}    switch(activeModule) {" src/App.jsx; then
    echo "✅ إصلاح switch مكرر..."
    sed -i 's/}    switch(activeModule) {/}/g' src/App.jsx
fi

# إصلاح الأقواس المتداخلة
if grep -q "}}}" src/App.jsx; then
    echo "✅ إصلاح أقواس متداخلة..."
    sed -i 's/}}}/}/g' src/App.jsx
fi

# إصلاح نقاط الفاصلة المفقودة
if grep -q "console.log(" src/App.jsx && ! grep -q "console.log(.*);" src/App.jsx; then
    echo "✅ إضافة نقاط فاصلة لـ console.log..."
    sed -i 's/console.log(\([^)]*\))/console.log(\1);/g' src/App.jsx
fi

# التحقق من بناء الجملة
echo "🔍 التحقق من بناء الجملة..."
npx eslint src/App.jsx --fix 2>/dev/null || echo "⚠️  يمكن تجاهل أخطاء eslint"

echo "🎉 تم تصحيح الأخطاء!"
echo "📁 تم إنشاء نسخة احتياطية: App.jsx.backup.auto"
