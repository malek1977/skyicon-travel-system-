import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Shield, 
  Heart, 
  Users, 
  Phone, 
  Mail,
  MessageSquare,
  UserCheck,
  FileCheck,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  Star,
  TrendingUp,
  Calendar,
  Search,
  Filter,
  Plus,
  Edit,
  Eye,
  Download,
  Upload,
  Settings,
  Database,
  Lock,
  Key,
  Activity
} from 'lucide-react'

const SupportModules = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const supportStats = [
    { title: 'الموافقات الأمنية', value: '234', change: '+15.3%', icon: Shield, color: 'bg-red-500' },
    { title: 'الفحوصات الطبية', value: '456', change: '+22.1%', icon: Heart, color: 'bg-green-500' },
    { title: 'العملاء النشطين', value: '1,234', change: '+8.2%', icon: Users, color: 'bg-blue-500' },
    { title: 'طلبات الدعم', value: '89', change: '-5.4%', icon: MessageSquare, color: 'bg-purple-500' }
  ]

  const securityApprovals = [
    {
      id: 'SEC-001',
      applicant: 'أحمد محمد علي',
      type: 'تصريح سفر',
      submissionDate: '2025-01-08',
      status: 'approved',
      priority: 'high',
      reviewer: 'إدارة الأمن',
      notes: 'تم الموافقة بعد مراجعة الوثائق'
    },
    {
      id: 'SEC-002',
      applicant: 'فاطمة أحمد سالم',
      type: 'تصريح حج',
      submissionDate: '2025-01-07',
      status: 'pending',
      priority: 'medium',
      reviewer: 'قيد المراجعة',
      notes: 'في انتظار الوثائق الإضافية'
    },
    {
      id: 'SEC-003',
      applicant: 'محمد سعد العتيبي',
      type: 'تصريح عمرة',
      submissionDate: '2025-01-06',
      status: 'rejected',
      priority: 'low',
      reviewer: 'إدارة الأمن',
      notes: 'وثائق غير مكتملة'
    }
  ]

  const medicalRecords = [
    {
      id: 'MED-001',
      patient: 'أحمد محمد علي',
      checkupType: 'فحص شامل',
      date: '2025-01-08',
      status: 'completed',
      result: 'سليم',
      doctor: 'د. محمد أحمد',
      nextAppointment: '2025-02-08'
    },
    {
      id: 'MED-002',
      patient: 'فاطمة أحمد سالم',
      checkupType: 'فحص كوفيد-19',
      date: '2025-01-07',
      status: 'pending',
      result: 'قيد الانتظار',
      doctor: 'د. سارة محمد',
      nextAppointment: '2025-01-15'
    },
    {
      id: 'MED-003',
      patient: 'محمد سعد العتيبي',
      checkupType: 'فحص الحمى الصفراء',
      date: '2025-01-06',
      status: 'completed',
      result: 'سليم',
      doctor: 'د. أحمد سالم',
      nextAppointment: '2025-03-06'
    }
  ]

  const crmData = [
    {
      id: 'CRM-001',
      customer: 'أحمد محمد علي',
      email: 'ahmed@example.com',
      phone: '+966501234567',
      lastContact: '2025-01-08',
      totalBookings: 5,
      totalSpent: '75,000',
      status: 'vip',
      satisfaction: 4.8
    },
    {
      id: 'CRM-002',
      customer: 'فاطمة أحمد سالم',
      email: 'fatima@example.com',
      phone: '+966507654321',
      lastContact: '2025-01-07',
      totalBookings: 3,
      totalSpent: '45,000',
      status: 'regular',
      satisfaction: 4.5
    },
    {
      id: 'CRM-003',
      customer: 'محمد سعد العتيبي',
      email: 'mohammed@example.com',
      phone: '+966509876543',
      lastContact: '2025-01-06',
      totalBookings: 8,
      totalSpent: '120,000',
      status: 'vip',
      satisfaction: 4.9
    }
  ]

  const supportTickets = [
    {
      id: 'TKT-001',
      customer: 'أحمد محمد علي',
      subject: 'استفسار عن حجز الطيران',
      priority: 'high',
      status: 'open',
      assignedTo: 'سارة أحمد',
      createdDate: '2025-01-08',
      lastUpdate: '2025-01-08'
    },
    {
      id: 'TKT-002',
      customer: 'فاطمة أحمد سالم',
      subject: 'طلب تعديل موعد السفر',
      priority: 'medium',
      status: 'in_progress',
      assignedTo: 'محمد سالم',
      createdDate: '2025-01-07',
      lastUpdate: '2025-01-08'
    },
    {
      id: 'TKT-003',
      customer: 'محمد سعد العتيبي',
      subject: 'شكوى من جودة الخدمة',
      priority: 'high',
      status: 'resolved',
      assignedTo: 'نورا خالد',
      createdDate: '2025-01-06',
      lastUpdate: '2025-01-07'
    }
  ]

  const getStatusBadge = (status, type = 'general') => {
    switch(status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">معتمد</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">قيد المراجعة</Badge>
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">مرفوض</Badge>
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">مكتمل</Badge>
      case 'open':
        return <Badge className="bg-blue-100 text-blue-800">مفتوح</Badge>
      case 'in_progress':
        return <Badge className="bg-yellow-100 text-yellow-800">قيد المعالجة</Badge>
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800">محلول</Badge>
      case 'vip':
        return <Badge className="bg-purple-100 text-purple-800">VIP</Badge>
      case 'regular':
        return <Badge className="bg-gray-100 text-gray-800">عادي</Badge>
      default:
        return <Badge variant="secondary">غير محدد</Badge>
    }
  }

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">عالي</Badge>
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">متوسط</Badge>
      case 'low':
        return <Badge className="bg-green-100 text-green-800">منخفض</Badge>
      default:
        return <Badge variant="secondary">غير محدد</Badge>
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'approved':
      case 'completed':
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'pending':
      case 'in_progress':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-500" />
      case 'open':
        return <AlertTriangle className="w-4 h-4 text-blue-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* إحصائيات الوحدات المساندة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportStats.map((stat, index) => {
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

      {/* التبويبات الرئيسية */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="security">الموافقات الأمنية</TabsTrigger>
          <TabsTrigger value="medical">النظام الطبي</TabsTrigger>
          <TabsTrigger value="crm">إدارة العملاء</TabsTrigger>
          <TabsTrigger value="support">الدعم الفني</TabsTrigger>
        </TabsList>

        {/* نظرة عامة */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* الموافقات الأمنية الأخيرة */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Shield className="w-5 h-5 ml-2" />
                    الموافقات الأمنية
                  </span>
                  <Button size="sm" variant="outline">
                    <Plus className="w-4 h-4 ml-1" />
                    طلب جديد
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityApprovals.slice(0, 3).map((approval) => (
                    <div key={approval.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        {getStatusIcon(approval.status)}
                        <div>
                          <p className="text-sm font-medium text-gray-900">{approval.applicant}</p>
                          <p className="text-xs text-gray-500">{approval.type} • {approval.submissionDate}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        {getStatusBadge(approval.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* الفحوصات الطبية الأخيرة */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 ml-2" />
                  الفحوصات الطبية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalRecords.slice(0, 3).map((record) => (
                    <div key={record.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        {getStatusIcon(record.status)}
                        <div>
                          <p className="text-sm font-medium text-gray-900">{record.patient}</p>
                          <p className="text-xs text-gray-500">{record.checkupType} • {record.date}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        {getStatusBadge(record.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">طلبات الدعم المفتوحة</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">23</p>
                    <p className="text-xs text-gray-500">يحتاج متابعة</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">متوسط الرضا</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">4.7</p>
                    <p className="text-xs text-gray-500">من 5 نجوم</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">عملاء VIP</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
                    <p className="text-xs text-gray-500">عميل مميز</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">معدل الاستجابة</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">2.5</p>
                    <p className="text-xs text-gray-500">ساعة متوسط</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* الموافقات الأمنية */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>نظام الموافقات الأمنية</CardTitle>
              <CardDescription>إدارة طلبات الموافقات الأمنية والتصاريح</CardDescription>
            </CardHeader>
            <CardContent>
              {/* أدوات البحث والتصفية */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="البحث في الطلبات..." className="pr-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 ml-1" />
                    تصفية
                  </Button>
                </div>
                <Button size="sm">
                  <Plus className="w-4 h-4 ml-1" />
                  طلب جديد
                </Button>
              </div>

              {/* جدول الموافقات */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">رقم الطلب</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">مقدم الطلب</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">نوع التصريح</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الأولوية</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">المراجع</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الحالة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {securityApprovals.map((approval) => (
                      <tr key={approval.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{approval.id}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{approval.applicant}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{approval.type}</td>
                        <td className="px-4 py-3">{getPriorityBadge(approval.priority)}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{approval.reviewer}</td>
                        <td className="px-4 py-3">{getStatusBadge(approval.status)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <FileCheck className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* إحصائيات الأمان */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 ml-2" />
                  مستوى الأمان
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">التشفير</span>
                    <Badge className="bg-green-100 text-green-800">AES-256</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">المصادقة</span>
                    <Badge className="bg-green-100 text-green-800">2FA</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">النسخ الاحتياطي</span>
                    <Badge className="bg-green-100 text-green-800">يومي</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 ml-2" />
                  الصلاحيات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">المديرين</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">المشرفين</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">الموظفين</span>
                    <span className="font-medium">25</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 ml-2" />
                  سجل النشاط
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">تسجيلات دخول اليوم</span>
                    <span className="font-medium">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">محاولات فاشلة</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">جلسات نشطة</span>
                    <span className="font-medium">23</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* النظام الطبي */}
        <TabsContent value="medical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>النظام الطبي للمسافرين</CardTitle>
              <CardDescription>إدارة الفحوصات الطبية والسجلات الصحية</CardDescription>
            </CardHeader>
            <CardContent>
              {/* أدوات البحث والتصفية */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="البحث في السجلات..." className="pr-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 ml-1" />
                    تصفية
                  </Button>
                </div>
                <Button size="sm">
                  <Plus className="w-4 h-4 ml-1" />
                  فحص جديد
                </Button>
              </div>

              {/* جدول السجلات الطبية */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">رقم السجل</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">المريض</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">نوع الفحص</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">التاريخ</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الطبيب</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">النتيجة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الحالة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {medicalRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{record.id}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{record.patient}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{record.checkupType}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{record.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{record.doctor}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{record.result}</td>
                        <td className="px-4 py-3">{getStatusBadge(record.status)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* إدارة العلاقات مع العملاء */}
        <TabsContent value="crm" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>إدارة العلاقات مع العملاء (CRM)</CardTitle>
              <CardDescription>متابعة وإدارة بيانات العملاء وتفاعلاتهم</CardDescription>
            </CardHeader>
            <CardContent>
              {/* أدوات البحث والتصفية */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="البحث في العملاء..." className="pr-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 ml-1" />
                    تصفية
                  </Button>
                </div>
                <Button size="sm">
                  <Plus className="w-4 h-4 ml-1" />
                  عميل جديد
                </Button>
              </div>

              {/* جدول العملاء */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">العميل</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">البريد الإلكتروني</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الهاتف</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الحجوزات</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">إجمالي الإنفاق</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">التقييم</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الحالة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {crmData.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{customer.customer}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{customer.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{customer.phone}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{customer.totalBookings}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{customer.totalSpent} ريال</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{customer.satisfaction}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">{getStatusBadge(customer.status)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* الدعم الفني */}
        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>نظام الدعم الفني</CardTitle>
              <CardDescription>إدارة طلبات الدعم والشكاوى</CardDescription>
            </CardHeader>
            <CardContent>
              {/* أدوات البحث والتصفية */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="البحث في التذاكر..." className="pr-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 ml-1" />
                    تصفية
                  </Button>
                </div>
                <Button size="sm">
                  <Plus className="w-4 h-4 ml-1" />
                  تذكرة جديدة
                </Button>
              </div>

              {/* جدول تذاكر الدعم */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">رقم التذكرة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">العميل</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الموضوع</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الأولوية</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">مسند إلى</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الحالة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {supportTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{ticket.id}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{ticket.customer}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{ticket.subject}</td>
                        <td className="px-4 py-3">{getPriorityBadge(ticket.priority)}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{ticket.assignedTo}</td>
                        <td className="px-4 py-3">{getStatusBadge(ticket.status)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SupportModules

