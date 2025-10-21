#!/bin/bash

echo "🎯 بدء إضافة الوظائف المتقدمة للأزرار..."

# دالة لمعالجة كل ملف
fix_file_advanced() {
    local file=$1
    if [ -f "$file" ]; then
        echo "🔧 معالجة: $file"
        cp "$file" "$file.backup2"
        
        # استبدال الأزرار بناءً على النص
        sed -i '
            # أزرار الحجز
            /احجز/ s/onClick={[^}]*}/onClick={() => handleBooking("رحلة جديدة")}/g
            /حجز/ s/onClick={[^}]*}/onClick={() => handleBooking("رحلة جديدة")}/g
            
            # أزرار الحج والعمرة
            /حاج/ s/onClick={[^}]*}/onClick={() => handleHajjRegistration()}/g
            /معتمر/ s/onClick={[^}]*}/onClick={() => handleHajjRegistration()}/g
            
            # أزرار المحاسبة
            /فاتورة/ s/onClick={[^}]*}/onClick={() => createInvoice()}/g
            /دفعة/ s/onClick={[^}]*}/onClick={() => processPayment()}/g
            /مالي/ s/onClick={[^}]*}/onClick={() => showFinancialReport()}/g
            /تقرير/ s/onClick={[^}]*}/onClick={() => showFinancialReport()}/g
            
            # أزرار الإعدادات
            /إعدادات/ s/onClick={[^}]*}/onClick={() => openSettings()}/g
            /حفظ/ s/onClick={[^}]*}/onClick={() => saveSettings()}/g
            
            # أزرار عامة
            /إدارة/ s/onClick={[^}]*}/onClick={() => openManagement()}/g
            /عرض/ s/onClick={[^}]*}/onClick={() => showDetails()}/g
            /جديد/ s/onClick={[^}]*}/onClick={() => createNew()}/g
        ' "$file"
        
        echo "✅ تم: $file"
    fi
}

# معالجة جميع الملفات
find src/ -name "*.jsx" -o -name "*.js" | while read file; do
    if grep -q "<Button" "$file"; then
        fix_file_advanced "$file"
    fi
done

echo "🎉 تم تحديث جميع الأزرار بوظائف متقدمة!"
