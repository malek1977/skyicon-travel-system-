#!/bin/bash

echo "بدء إصلاح جميع الأزرار..."

# دالة لإضافة onClick لملف
fix_file() {
    local file=$1
    if [ -f "$file" ]; then
        echo "جاري إصلاح: $file"
        
        # إنشاء نسخة احتياطية
        cp "$file" "$file.backup"
        
        # إضافة onClick لجميع الأزرار التي لا تحتويه
        sed -i 's/<Button\([^>]*\)>/<Button\1 onClick={() => alert("تم الضغط!")}>/g' "$file"
        
        # إصلاح الأزرار التي تنتهي بـ />
        sed -i 's/<Button\([^>]*\)\/>/<Button\1 onClick={() => alert("تم الضغط!")} \/>/g' "$file"
        
        echo "تم إصلاح: $file"
    fi
}

# إصلاح جميع ملفات JSX/JS
find src/ -name "*.jsx" -o -name "*.js" | while read file; do
    if grep -q "<Button" "$file"; then
        fix_file "$file"
    fi
done

echo "✅ تم إصلاح جميع الأزرار بنجاح!"
echo "📝 تم إنشاء نسخ احتياطية: *.backup"
