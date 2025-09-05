import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Home, 
  Calculator, 
  Plane, 
  MapPin, 
  Users, 
  Shield, 
  Heart, 
  Settings,
  BarChart3,
  CreditCard,
  FileText,
  Globe,
  Star
} from 'lucide-react'
import './App.css'

// المكونات الأساسية
import Dashboard from './components/Dashboard'
import AccountingModule from './components/AccountingModule'
import TravelModule from './components/TravelModule'
import HajjUmrahModule from './components/HajjUmrahModule'
import SupportModules from './components/SupportModules'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeModule, setActiveModule] = useState('dashboard')

  const modules = [
    { id: 'dashboard', name: 'لوحة التحكم', icon: Home, color: 'bg-blue-500' },
    { id: 'accounting', name: 'المحاسبة والمبيعات', icon: Calculator, color: 'bg-green-500' },
    { id: 'travel', name: 'السفريات والسياحة', icon: Plane, color: 'bg-purple-500' },
    { id: 'hajj-umrah', name: 'الحج والعمرة', icon: MapPin, color: 'bg-orange-500' },
    { id: 'support', name: 'الوحدات المساندة', icon: Users, color: 'bg-teal-500' },
  ]

  const renderActiveModule = () => {
    switch(activeModule) {
      case 'dashboard':
        return <Dashboard />
      case 'accounting':
        return <AccountingModule />
      case 'travel':
        return <TravelModule />
      case 'hajj-umrah':
        return <HajjUmrahModule />
      case 'support':
        return <SupportModules />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      {/* الشريط الجانبي */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* هيدر الشريط الجانبي */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-800">سكاي آيكون</h1>
                  <p className="text-xs text-gray-500">نظام السفريات المتكامل</p>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* قائمة الوحدات */}
        <nav className="flex-1 p-4 space-y-2">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg transition-all duration-200 ${
                  activeModule === module.id
                    ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  activeModule === module.id ? 'bg-blue-100' : module.color
                }`}>
                  <Icon className={`w-4 h-4 ${
                    activeModule === module.id ? 'text-blue-700' : 'text-white'
                  }`} />
                </div>
                {sidebarOpen && (
                  <span className="font-medium">{module.name}</span>
                )}
              </button>
            )
          })}
        </nav>

        {/* معلومات النظام */}
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">الإصدار 1.0</p>
                  <p className="text-xs opacity-80">جميع الحقوق محفوظة</p>
                </div>
                <Shield className="w-5 h-5 opacity-80" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col">
        {/* الهيدر العلوي */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {modules.find(m => m.id === activeModule)?.name || 'لوحة التحكم'}
              </h2>
              <p className="text-sm text-gray-500">
                إدارة شاملة لجميع عمليات السفريات والسياحة
              </p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                متصل
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 ml-2" />
                الإعدادات
              </Button>
            </div>
          </div>
        </header>

        {/* المحتوى */}
        <main className="flex-1 p-6 overflow-auto">
          {renderActiveModule()}
        </main>
      </div>
    </div>
  )
}

export default App

