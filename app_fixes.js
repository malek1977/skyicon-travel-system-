// state للوظائف الحقيقية
const [showSettings, setShowSettings] = useState(false)
const [showInvoice, setShowInvoice] = useState(false)
const [showBooking, setShowBooking] = useState(false)
const [showHajjForm, setShowHajjForm] = useState(false)

// الدوال الحقيقية
const handleSettings = () => {
  setShowSettings(true)
  console.log('فتح الإعدادات')
}

const handleInvoice = () => {
  setShowInvoice(true)
  console.log('فتح إنشاء فاتورة')
}

const handleBooking = () => {
  setShowBooking(true)
  console.log('فتح نموذج الحجز')
}

const handleHajjRegistration = () => {
  setShowHajjForm(true)
  console.log('فتح تسجيل حاج')
}
