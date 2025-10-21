import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  Hotel,
  Car,
  Camera,
  Globe,
  Clock,
  Star,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  AlertCircle,
  Navigation
} from 'lucide-react'

const TravelModule = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const travelStats = [
    { title: 'الحجوزات النشطة', value: '156', change: '+12.5%', icon: Plane, color: 'bg-blue-500' },
    { title: 'البرامج السياحية', value: '24', change: '+8.2%', icon: Camera, color: 'bg-green-500' },
    { title: 'الوجهات المتاحة', value: '45', change: '+15.3%', icon: Globe, color: 'bg-purple-500' },
    { title: 'العملاء المسافرين', value: '789', change: '+22.1%', icon: Users, color: 'bg-orange-500' }
  ]

  const recentBookings = [
    { 
      id: 'TRV-001', 
      customer: 'أحمد محمد علي', 
      destination: 'دبي', 
      departure: '2025-01-15', 
      return: '2025-01-20', 
      status: 'confirmed',
      passengers: 2,
      amount: '15,000'
    },
    { 
      id: 'TRV-002', 
      customer: 'فاطمة أحمد', 
      destination: 'تركيا', 
      departure: '2025-01-18', 
      return: '2025-01-25', 
      status: 'pending',
      passengers: 4,
      amount: '28,000'
    },
    { 
      id: 'TRV-003', 
      customer: 'محمد سالم', 
      destination: 'مصر', 
      departure: '2025-01-20', 
      return: '2025-01-27', 
      status: 'confirmed',
      passengers: 3,
      amount: '18,500'
    },
    { 
      id: 'TRV-004', 
      customer: 'نورا خالد', 
      destination: 'المغرب', 
      departure: '2025-01-22', 
      return: '2025-01-30', 
      status: 'cancelled',
      passengers: 2,
      amount: '22,000'
    }
  ]

  const tourPackages = [
    {
      id: 'PKG-001',
      name: 'جولة دبي الذهبية',
      duration: '5 أيام / 4 ليالي',
      price: '7,500',
      rating: 4.8,
      bookings: 45,
      image: '/api/placeholder/300/200',
      includes: ['طيران', 'إقامة 5 نجوم', 'جولات سياحية', 'وجبات']
    },
    {
      id: 'PKG-002',
      name: 'رحلة تركيا الساحرة',
      duration: '7 أيام / 6 ليالي',
      price: '12,000',
      rating: 4.9,
      bookings: 32,
      image: '/api/placeholder/300/200',
      includes: ['طيران', 'إقامة فاخرة', 'جولات تاريخية', 'مواصلات']
    },
    {
      id: 'PKG-003',
      name: 'مغامرة مصر الأصيلة',
      duration: '6 أيام / 5 ليالي',
      price: '9,500',
      rating: 4.7,
      bookings: 28,
      image: '/api/placeholder/300/200',
      includes: ['طيران', 'إقامة', 'جولة الأهرامات', 'رحلة نيلية']
    }
  ]

  const destinations = [
    { name: 'دبي', country: 'الإمارات', bookings: 156, rating: 4.8, image: '/api/placeholder/200/150' },
    { name: 'إسطنبول', country: 'تركيا', bookings: 134, rating: 4.9, image: '/api/placeholder/200/150' },
    { name: 'القاهرة', country: 'مصر', bookings: 89, rating: 4.6, image: '/api/placeholder/200/150' },
    { name: 'الدار البيضاء', country: 'المغرب', bookings: 67, rating: 4.7, image: '/api/placeholder/200/150' },
    { name: 'كوالالمبور', country: 'ماليزيا', bookings: 45, rating: 4.5, image: '/api/placeholder/200/150' },
    { name: 'جاكرتا', country: 'إندونيسيا', bookings: 34, rating: 4.4, image: '/api/placeholder/200/150' }
  ]

  const getStatusBadge = (status) => {
    switch(status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">مؤكد</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">معلق</Badge>
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">ملغي</Badge>
      default:
        return <Badge variant="secondary">غير محدد</Badge>
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'cancelled':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* إحصائيات السفريات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {travelStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
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
          <TabsTrigger value="bookings">الحجوزات</TabsTrigger>
          <TabsTrigger value="packages">البرامج السياحية</TabsTrigger>
          <TabsTrigger value="destinations">الوجهات</TabsTrigger>
          <TabsTrigger value="services">الخدمات</TabsTrigger>
        </TabsList>

        {/* نظرة عامة */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* الحجوزات الأخيرة */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Plane className="w-5 h-5 ml-2" />
                    الحجوزات الأخيرة
                  </span>
                  <Button size="sm" variant="outline" onClick={() => alert("تم الضغط!")}>
                    <Plus className="w-4 h-4 ml-1" />
                    حجز جديد
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.slice(0, 4).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        {getStatusIcon(booking.status)}
                        <div>
                          <p className="text-sm font-medium text-gray-900">{booking.customer}</p>
                          <p className="text-xs text-gray-500">
                            {booking.destination} • {booking.passengers} مسافر • {booking.departure}
                          </p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-gray-900">{booking.amount} ريال</p>
                        {getStatusBadge(booking.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* الوجهات الشائعة */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 ml-2" />
                  الوجهات الشائعة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {destinations.slice(0, 5).map((destination, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{destination.name}</p>
                          <p className="text-xs text-gray-500">{destination.country}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{destination.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">{destination.bookings} حجز</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* البرامج السياحية المميزة */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="w-5 h-5 ml-2" />
                البرامج السياحية المميزة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourPackages.map((pkg) => (
                  <Card key={pkg.id} className="hover:shadow-lg transition-shadow duration-200">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                      <Camera className="w-12 h-12 text-white opacity-50" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{pkg.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{pkg.duration}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-wrap gap-1">
                          {pkg.includes.map((item, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold text-blue-600">{pkg.price} ريال</p>
                          <p className="text-xs text-gray-500">{pkg.bookings} حجز</p>
                        </div>
                        <Button size="sm" onClick={() => createNew()}>احجز الآن</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* إدارة الحجوزات */}
        <TabsContent value="bookings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>إدارة الحجوزات</CardTitle>
              <CardDescription>عرض وإدارة جميع حجوزات السفر</CardDescription>
            </CardHeader>
            <CardContent>
              {/* أدوات البحث والتصفية */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="البحث في الحجوزات..." className="pr-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert("تم الضغط!")}>
                    <Filter className="w-4 h-4 ml-1" />
                    تصفية
                  </Button>
                </div>
                <Button size="sm" onClick={() => alert("تم الضغط!")}>
                  <Plus className="w-4 h-4 ml-1" />
                  حجز جديد
                </Button>
              </div>

              {/* جدول الحجوزات */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">رقم الحجز</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">العميل</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الوجهة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">تاريخ السفر</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">المسافرين</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">المبلغ</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الحالة</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{booking.id}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{booking.customer}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{booking.destination}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{booking.departure}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{booking.passengers}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{booking.amount} ريال</td>
                        <td className="px-4 py-3">{getStatusBadge(booking.status)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Button size="sm" variant="ghost" onClick={() => alert("تم الضغط!")}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => alert("تم الضغط!")}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => alert("تم الضغط!")}>
                              <Trash2 className="w-4 h-4" />
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

        {/* البرامج السياحية */}
        <TabsContent value="packages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>البرامج السياحية</span>
                <Button size="sm" onClick={() => alert("تم الضغط!")}>
                  <Plus className="w-4 h-4 ml-1" />
                  برنامج جديد
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourPackages.map((pkg) => (
                  <Card key={pkg.id} className="hover:shadow-lg transition-shadow duration-200">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                      <Camera className="w-12 h-12 text-white opacity-50" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{pkg.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{pkg.duration}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-wrap gap-1">
                          {pkg.includes.map((item, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-lg font-bold text-blue-600">{pkg.price} ريال</p>
                          <p className="text-xs text-gray-500">{pkg.bookings} حجز</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Button size="sm" variant="outline" className="flex-1" onClick={() => alert("تم الضغط!")}>
                          <Edit className="w-4 h-4 ml-1" />
                          تعديل
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" onClick={() => alert("تم الضغط!")}>
                          <Eye className="w-4 h-4 ml-1" />
                          عرض
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* الوجهات */}
        <TabsContent value="destinations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>إدارة الوجهات</span>
                <Button size="sm" onClick={() => alert("تم الضغط!")}>
                  <Plus className="w-4 h-4 ml-1" />
                  وجهة جديدة
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                    <div className="h-40 bg-gradient-to-r from-green-500 to-blue-600 rounded-t-lg flex items-center justify-center">
                      <MapPin className="w-12 h-12 text-white opacity-50" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-gray-900">{destination.name}</h3>
                          <p className="text-sm text-gray-600">{destination.country}</p>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{destination.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm text-gray-500">{destination.bookings} حجز</p>
                        <Badge variant="outline">نشط</Badge>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Button size="sm" variant="outline" className="flex-1" onClick={() => alert("تم الضغط!")}>
                          <Edit className="w-4 h-4 ml-1" />
                          تعديل
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" onClick={() => alert("تم الضغط!")}>
                          <Eye className="w-4 h-4 ml-1" />
                          عرض
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* الخدمات الإضافية */}
        <TabsContent value="services" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Hotel className="w-5 h-5 ml-2" />
                  حجز الفنادق
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">إدارة حجوزات الفنادق والإقامة</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">الحجوزات النشطة</span>
                    <span className="font-medium">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">الفنادق المتعاقدة</span>
                    <span className="font-medium">156</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" onClick={() => openManagement()}>إدارة الحجوزات</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="w-5 h-5 ml-2" />
                  تأجير السيارات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">خدمات تأجير السيارات والمواصلات</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">السيارات المتاحة</span>
                    <span className="font-medium">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">الحجوزات اليومية</span>
                    <span className="font-medium">12</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" onClick={() => openManagement()}>إدارة الأسطول</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Navigation className="w-5 h-5 ml-2" />
                  الجولات السياحية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">تنظيم الجولات والأنشطة السياحية</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">الجولات المتاحة</span>
                    <span className="font-medium">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">المشاركين اليوم</span>
                    <span className="font-medium">67</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" onClick={() => openManagement()}>إدارة الجولات</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TravelModule

