// عرض رسائل console.log() وأخطاء JS على الصفحة
(function() {
  // إنشاء صندوق العرض
  var box = document.createElement('div');
  box.id = "console-box";
  box.style = "position:fixed;bottom:0;left:0;width:100%;max-height:40%;overflow:auto;background:black;color:lime;font-family:monospace;font-size:12px;padding:4px;z-index:99999;";
  document.body.appendChild(box);

  // حفظ الدالة الأصلية
  const oldLog = console.log;
  const oldError = console.error;
  const oldWarn = console.warn;

  // دالة لطباعة على الصفحة
  function printToBox(prefix, msg, color) {
    const p = document.createElement('div');
    p.textContent = `[${prefix}] ${msg}`;
    p.style.color = color;
    box.appendChild(p);
    box.scrollTop = box.scrollHeight;
  }

  // إعادة تعريف console
  console.log = function(...args) {
    oldLog.apply(console, args);
    printToBox("LOG", args.join(' '), "lime");
  };

  console.error = function(...args) {
    oldError.apply(console, args);
    printToBox("ERROR", args.join(' '), "red");
  };

  console.warn = function(...args) {
    oldWarn.apply(console, args);
    printToBox("WARN", args.join(' '), "yellow");
  };

  // عرض أخطاء غير ممسوكة
  window.onerror = function(msg, url, line, col, error) {
    printToBox("EXCEPTION", msg + " (" + line + ":" + col + ")", "red");
  };
})();
