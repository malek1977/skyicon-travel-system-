import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  TrendingUp, 
  Users, 
  Plane, 
  DollarSign, 
  MapPin, 
  Calendar,
  BarChart3,
  Activity,
  Globe,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'إجمالي المبيعات',
      value: '2,450,000 ريال',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'العملاء النشطين',
      value: '1,234',
      change: '+8.2%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'الرحلات المكتملة',
      value: '456',
      change: '+15.3%',
      changeType: 'positive',
      icon: Plane,
      color: 'bg-purple-500'
    },
    {
      title: 'حجاج ومعتمرين',
      value: '789',
      change: '+22.1%',
      changeType: 'positive',
      icon: MapPin,
      color: 'bg-orange-500'
    }
  ]

  const recentActivities = [
    { id: 1, type: 'booking', message: 'حجز جديد لرحلة دبي - أحمد محمد', time: '5 دقائق', status: 'success' },
    { id: 2, type: 'payment', message: 'دفعة مستلمة - 15,000 ريال', time: '12 دقيقة', status: 'success' },
    { id: 3, type: 'hajj', message: 'تسجيل حاج جديد - فاطمة أحمد', time: '25 دقيقة', status: 'pending' },
    { id: 4, type: 'travel', message: 'إلغاء حجز رحلة القاهرة', time: '1 ساعة', status: 'warning' },
    { id: 5, type: 'system', message: 'نسخ احتياطي تم بنجاح', time: '2 ساعة', status: 'success' }
  ]

  const quickActions = [
    { title: 'حجز جديد', description: 'إضافة حجز سفر جديد', icon: Plane, color: 'bg-blue-500' },
    { title: 'تسجيل حاج', description: 'تسجيل حاج أو معتمر جديد', icon: MapPin, color: 'bg-orange-500' },
    { title: 'فاتورة جديدة', description: 'إنشاء فاتورة مبيعات', icon: DollarSign, color: 'bg-green-500' },
    { title: 'تقرير مالي', description: 'عرض التقارير المالية', icon: BarChart3, color: 'bg-purple-500' }
  ]

  const systemStatus = [
    { name: 'خادم التطبيق', status: 'online', uptime: '99.9%' },
    { name: 'قاعدة البيانات', status: 'online', uptime: '99.8%' },
    { name: 'نظام الدفع', status: 'online', uptime: '99.7%' },
    { name: 'النسخ الاحتياطي', status: 'online', uptime: '100%' }
  ]

  return (
    <div className="space-y-6">
      {/* الإحصائيات الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                      <span className="text-sm text-gray-500 mr-2">من الشهر الماضي</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* الأنشطة الأخيرة */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="w-5 h-5 ml-2" />
              الأنشطة الأخيرة
            </CardTitle>
            <CardDescription>آخر العمليات في النظام</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">منذ {activity.time}</p>
                    </div>
                  </div>
                  <Badge variant={
                    activity.status === 'success' ? 'default' :
                    activity.status === 'warning' ? 'destructive' : 'secondary'
                  }>
                    {activity.status === 'success' ? 'مكتمل' :
                     activity.status === 'warning' ? 'تحذير' : 'قيد المعالجة'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* الإجراءات السريعة */}
        <Card>
          <CardHeader>
            <CardTitle>الإجراءات السريعة</CardTitle>
            <CardDescription>العمليات الأكثر استخداماً</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto p-4 hover:bg-gray-50"
                  >
                    <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center ml-3`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{action.title}</p>
                      <p className="text-xs text-gray-500">{action.description}</p>
                    </div>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* حالة النظام */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-5 h-5 ml-2" />
            حالة النظام
          </CardTitle>
          <CardDescription>مراقبة أداء مكونات النظام</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemStatus.map((system, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{system.name}</p>
                    <p className="text-xs text-gray-500">وقت التشغيل: {system.uptime}</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* معلومات إضافية */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 ml-2" />
              الوجهات الشائعة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { destination: 'مكة المكرمة', bookings: 156, percentage: 85 },
                { destination: 'المدينة المنورة', bookings: 134, percentage: 72 },
                { destination: 'دبي', bookings: 89, percentage: 48 },
                { destination: 'القاهرة', bookings: 67, percentage: 36 },
                { destination: 'إسطنبول', bookings: 45, percentage: 24 }
              ].map((dest, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{dest.destination}</p>
                    <p className="text-xs text-gray-500">{dest.bookings} حجز</p>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${dest.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 ml-2" />
              المواعيد القادمة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { event: 'رحلة جماعية إلى دبي', date: '15 يناير 2025', time: '06:00 ص' },
                { event: 'موسم العمرة الشتوي', date: '20 يناير 2025', time: '08:00 ص' },
                { event: 'رحلة سياحية إلى تركيا', date: '25 يناير 2025', time: '10:00 ص' },
                { event: 'حج 2025 - التسجيل', date: '1 فبراير 2025', time: '09:00 ص' }
              ].map((event, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{event.event}</p>
                    <p className="text-xs text-gray-500">{event.date} - {event.time}</p>
                  </div>
                  <Clock className="w-4 h-4 text-blue-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

