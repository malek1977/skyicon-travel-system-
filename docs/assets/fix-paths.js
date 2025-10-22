// إصلاح المسارات الديناميكية عند فتح الموقع من مسار مختلف
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href^='/skyicon-travel-system-']").forEach(a => {
    a.href = a.href.replace("/skyicon-travel-system-", ".");
  });
});
