import { useState } from 'react';
import { 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  DollarSign,
  Wind,
  Droplets,
  Settings,
  Snowflake,
  Home,
  Building2,
  MessageCircle,
  CheckCircle,
  Star,
  User,
  Phone,
  MapPinned
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import logoAC from '../imports/logo_ac.jpeg';
import mapImage from '../imports/image-3.png';
import workImage1 from '../imports/WhatsApp_Image_2026-04-17_at_18.50.09.jpeg';
import workImage2 from '../imports/WhatsApp_Image_2026-04-17_at_18.50.10_(1).jpeg';
import workImage3 from '../imports/WhatsApp_Image_2026-04-17_at_18.50.10.jpeg';
import newWorkImage1 from '../imports/WhatsApp_Image_2026-04-30_at_20.33.06.jpeg';
import newWorkImage2 from '../imports/WhatsApp_Image_2026-04-30_at_20.37.54.jpeg';
import newWorkImage3 from '../imports/WhatsApp_Image_2026-04-30_at_20.38.08.jpeg';
import newWorkImage4 from '../imports/WhatsApp_Image_2026-04-30_at_20.38.19.jpeg';
import priceListImage from '../imports/list.jpeg';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    complaint: ''
  });

  const handleWhatsAppCTA = () => {
    const message = "Halo, saya ingin konsultasi servis AC";
    const whatsappUrl = `https://wa.me/6287825019502?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ingin pesan servis AC:\n\nNama: ${formData.name}\nNo. HP: ${formData.phone}\nAlamat: ${formData.address}\nKeluhan: ${formData.complaint}`;
    const whatsappUrl = `https://wa.me/6287825019502?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/uQhoFSYnvEJdwS8K6', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky WhatsApp Button */}
      <button
        onClick={handleWhatsAppCTA}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Header / Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoAC} alt="Servis AC Jogahan" className="h-12 w-12 object-contain rounded-lg" />
              <div>
                <h1 className="font-bold text-xl text-blue-600">Servis AC Bantul Yogyakarta</h1>
                <p className="text-xs text-gray-600">Bantul, Yogyakarta</p>
              </div>
            </div>
            <Button onClick={handleWhatsAppCTA} className="bg-green-500 hover:bg-green-600 hidden md:flex">
              <PhoneCall className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Melayani Panggilan ke Rumah
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Servis AC Cepat & Terpercaya di Bantul
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Melayani cuci AC, isi freon, bongkar pasang, perbaikan AC mati, AC kurang dingin, dan maintenance rutin.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleWhatsAppCTA}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">Rating 4.9/5</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">500+ Pelanggan</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl rotate-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1546079406-046e141edf3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25lciUyMHRlY2huaWNpYW4lMjB3b3JraW5nfGVufDF8fHx8MTc3NjI2NDcyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Teknisi AC Profesional"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Snowflake className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">AC Dingin</p>
                  <p className="text-sm text-gray-600">Bergaransi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://wa.me/6287825019502"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/abadijaya.teknikac/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/18KEr2G9yP/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="mailto:ardi.sustanto@gmail.com"
              className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Keunggulan Layanan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih Kami?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar profesional tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Teknisi Berpengalaman",
                description: "Tim teknisi profesional dan berpengalaman bertahun-tahun"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Respon Cepat",
                description: "Tim kami hadir secepatnya setelah pesanan kami terima"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Harga Bersaing dan Transparan",
                description: "Seluruh biaya diinformasikan secara transparan sejak awal, tanpa biaya tersembunyi"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Area Yogyakarta, Bantul, dan Sekitarnya",
                description: "Melayani seluruh wilayah Bantul, Yogyakarta, dan sekitarnya"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "AC Dingin Bergaransi",
                description: "Garansi servis untuk memastikan hasil kerja yang berkualitas"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Siap Melayani 24 Jam",
                description: "Layanan kami selalu siap kapan saja untuk Anda"
              }
            ].map((item, index) => (
              <Card key={index} className="border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan Kami */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Solusi lengkap untuk semua kebutuhan perawatan dan perbaikan AC Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wind className="w-10 h-10" />,
                title: "Cuci AC",
                description: "Pembersihan menyeluruh indoor & outdoor unit untuk performa optimal",
                color: "blue"
              },
              {
                icon: <Droplets className="w-10 h-10" />,
                title: "Isi Freon",
                description: "Pengisian freon sesuai standar pabrik untuk AC yang lebih dingin",
                color: "cyan"
              },
              {
                icon: <Snowflake className="w-10 h-10" />,
                title: "Perbaikan AC Tidak Dingin",
                description: "Diagnosa dan perbaikan AC yang kurang dingin atau tidak dingin sama sekali",
                color: "sky"
              },
              {
                icon: <Settings className="w-10 h-10" />,
                title: "Bongkar Pasang AC",
                description: "Jasa bongkar pasang AC untuk pindahan atau renovasi rumah",
                color: "indigo"
              },
              {
                icon: <Droplets className="w-10 h-10" />,
                title: "Service AC Bocor",
                description: "Perbaikan AC bocor dengan pengecekan menyeluruh sistem pendingin",
                color: "violet"
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Solusi Perawatan AC untuk Beragam Kebutuhan Properti",
                description: "Perawatan rutin untuk berbagai jenis properti, seperti rumah, apartemen, kos, kantor, toko, restoran, hotel, dan fasilitas lainnya",
                color: "blue"
              },
              {
                icon: <Settings className="w-10 h-10" />,
                title: "Pemasangan AC",
                description: "Layanan instalasi AC dari unit kami maupun unit dari Anda",
                color: "indigo"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className={`bg-${service.color}-100 text-${service.color}-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={handleWhatsAppCTA} size="lg" className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-5 h-5 mr-2" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Area Layanan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Area Layanan Kami
            </h3>
            <p className="text-gray-600 text-lg">
              Melayani area Bantul, Yogyakarta dan sekitarnya
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12 text-center border border-blue-100">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h4 className="font-bold text-2xl text-gray-900 mb-3">
                Bantul, Yogyakarta dan Sekitarnya
              </h4>
              <p className="text-gray-600 text-lg mb-6">
                Tidak yakin area Anda tercover? Hubungi kami untuk konfirmasi!
              </p>
              <Button onClick={handleWhatsAppCTA} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Tanya Area Layanan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Pekerjaan Kami */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Galeri Pekerjaan Kami
            </h3>
            <p className="text-lg text-blue-100">
              Dokumentasi maintenance & pemasangan oleh teknisi profesional dan berpengalaman kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Foto 1 - Teknisi servis AC indoor */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={workImage1}
                alt="Teknisi servis AC indoor"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Servis AC Indoor</p>
              </div>
            </div>

            {/* Foto 2 - Teknisi membersihkan AC outdoor */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={workImage2}
                alt="Teknisi membersihkan AC outdoor"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Pembersihan AC Outdoor</p>
              </div>
            </div>

            {/* Foto 3 - Service AC outdoor Samsung */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={workImage3}
                alt="Teknisi service AC outdoor Samsung"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Service AC Outdoor - Samsung</p>
              </div>
            </div>

            {/* Foto 4 - Unit AC outdoor baru */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={newWorkImage1}
                alt="Pemasangan unit AC outdoor"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Pemasangan AC Outdoor</p>
              </div>
            </div>

            {/* Foto 5 - Stok unit AC indoor/outdoor */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={newWorkImage2}
                alt="Stok unit AC indoor dan outdoor"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Stok Unit AC</p>
              </div>
            </div>

            {/* Foto 6 - Koleksi unit AC indoor */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={newWorkImage3}
                alt="Koleksi unit AC indoor siap pasang"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Unit AC Indoor Siap Pasang</p>
              </div>
            </div>

            {/* Foto 7 - Peralatan servis AC */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group md:col-span-2 lg:col-span-3">
              <img
                src={newWorkImage4}
                alt="Peralatan dan toolbox servis AC profesional"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Peralatan Servis AC Profesional</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-blue-100">Pelanggan Puas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">5+</p>
                <p className="text-blue-100">Tahun Pengalaman</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">100%</p>
                <p className="text-blue-100">Garansi Kerja</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">24/7</p>
                <p className="text-blue-100">Siap Melayani</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kata Pelanggan Kami
            </h3>
            <p className="text-gray-600 text-lg">
              Kepuasan pelanggan adalah bukti kualitas layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Budi Santoso",
                role: "Rumah Tangga",
                image: "https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjIwODAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
                text: "Pelayanan cepat dan profesional! AC di rumah saya jadi dingin lagi. Harga juga sangat terjangkau. Recommended!"
              },
              {
                name: "Siti Nurhaliza",
                role: "Pemilik Kos",
                image: "https://images.unsplash.com/photo-1710488140888-88896ecafdcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2MjY0NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
                text: "Teknisinya ramah dan menjelaskan dengan detail masalah AC saya. Setelah diservis, AC langsung dingin maksimal. Terima kasih!"
              },
              {
                name: "Agus Prasetyo",
                role: "Pemilik Penginapan",
                image: "https://images.unsplash.com/photo-1758691737605-69a0e78bd193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzJTIwb3duZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzYyNjQ3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                text: "Sudah 3 kali pakai jasa mereka untuk servis AC di penginapan. Selalu puas! Responnya cepat dan hasilnya memuaskan."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Price List Image */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Daftar Harga Layanan
            </h3>
            <p className="text-gray-600 text-lg">
              Katalog lengkap harga maintenance unit AC split
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <img
                src={priceListImage}
                alt="Price List Maintenance Unit AC Split"
                className="w-full h-auto"
              />
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={handleWhatsAppCTA}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-lg shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Tanya Harga & Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Harga / Estimasi */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              HARGA MAINTENANCE UNIT AC SPLIT
            </h3>
            <p className="text-gray-600 text-lg">
              Harga terjangkau dan transparan untuk semua layanan
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Pricing Table */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                      <th className="px-6 py-4 text-left text-white font-bold text-lg">Jenis Layanan</th>
                      <th className="px-6 py-4 text-right text-white font-bold text-lg">Harga</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Cleaning cuci perawatan unit</div>
                        <div className="text-sm text-gray-600">Standar AC 1/2 - 1 PK</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 75.000/unit</div>
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Cleaning cuci perawatan unit</div>
                        <div className="text-sm text-gray-600">1,5 - 2 PK</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 100.000/unit</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Bongkar pasang indoor + outdoor</div>
                        <div className="text-sm text-gray-600">1/2 - 1 PK</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 300.000/unit</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Bongkar pasang indoor/outdoor</div>
                        <div className="text-sm text-gray-600">1/2 - 1 PK</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 200.000/unit</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Isi freon full jenis R22</div>
                        <div className="text-sm text-gray-600">Standar 1/2 - 1 PK</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 300.000/unit</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        Tambah freon jenis R22
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 50.000/10 psi</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Isi freon full jenis R32</div>
                        <div className="text-sm text-gray-600">Standar 1/2 - 1 PK</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 400.000/unit</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        Tambah freon jenis R32
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 50.000/15 psi</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Isi freon full jenis R410</div>
                        <div className="text-sm text-gray-600">Standar 1/2 - 1 PK</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 400.000/unit</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        Tambah freon jenis R410
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 50.000/15 psi</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        Over haul total indoor outdoor + blasing
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 500.000/unit</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Pipa freon tembaga/meter</div>
                        <div className="text-sm text-gray-600">Standar</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 80.000/meter</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900">
                        <div className="font-medium">Pipa freon tembaga/meter</div>
                        <div className="text-sm text-gray-600">Standar AC inverter</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 100.000/meter</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        Penggantian spare part rusak ringan
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-blue-600 text-lg">Rp 100.000 - 200.000</div>
                      </td>
                    </tr>

                    <tr className="bg-gradient-to-r from-green-50 to-blue-50 border-t-2 border-green-500">
                      <td className="px-6 py-5 text-gray-900">
                        <div className="font-bold text-lg">Paket Terima Dingin AC Split Standar</div>
                        <div className="text-sm text-gray-600 mt-1">1/2 - 1 PK</div>
                        <div className="text-xs text-gray-500 mt-2 italic">
                          Meliputi: cuci cleaning, tambah/isi freon, pengecekan total indoor-outdoor
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg">
                          <div className="text-xs font-medium">PAKET HEMAT</div>
                          <div className="font-bold text-xl">Rp 225.000/unit</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Catatan Penting */}
            <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-yellow-900" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Catatan Penting:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Harga di atas <span className="font-bold text-yellow-900">sudah termasuk garansi 1 bulan</span> dan untuk <span className="font-bold text-yellow-900">AC standar 1/2 - 1 PK non inverter</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <Button 
                onClick={handleWhatsAppCTA}
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-lg shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi & Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Booking */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Pesan Servis Sekarang
                </h3>
                <p className="text-gray-600 mb-6">
                  Isi form di bawah dan kami akan segera menghubungi Anda
                </p>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Nama Lengkap
                    </label>
                    <Input 
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Nomor HP/WhatsApp
                    </label>
                    <Input 
                      type="tel"
                      placeholder="08xx xxxx xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPinned className="w-4 h-4 inline mr-1" />
                      Alamat Lengkap
                    </label>
                    <Input 
                      type="text"
                      placeholder="Jalan, RT/RW, Kelurahan, Kecamatan"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Keluhan AC
                    </label>
                    <Textarea 
                      placeholder="Contoh: AC tidak dingin, bocor, mati total, dll"
                      value={formData.complaint}
                      onChange={(e) => setFormData({...formData, complaint: e.target.value})}
                      required
                      className="w-full min-h-24"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-6">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Kirim via WhatsApp
                  </Button>
                </form>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 bg-blue-600 text-white">
                  <h4 className="font-bold text-xl mb-2">Lokasi Kami</h4>
                  <p className="text-blue-100 text-sm">
                    Jogahan, RT.03, Gaten, Canden, Kec. Jetis, Kabupaten Bantul
                  </p>
                </div>
                <div className="relative h-96 cursor-pointer" onClick={handleLocationClick}>
                  <img
                    src={mapImage}
                    alt="Peta Lokasi Servis AC Jogahan"
                    className="w-full h-full object-cover"
                  />
                  <Button
                    onClick={handleLocationClick}
                    className="absolute bottom-4 left-4 bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Buka di Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Akhir */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Snowflake className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            AC Bermasalah? Layanan Kami Siap Datang Kapan Pun dan Dimanapun
          </h3>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Jangan biarkan AC rusak mengganggu kenyamanan Anda. Layanan kami selalu siap kapan saja untuk Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppCTA}
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-7 text-lg shadow-xl"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Chat WhatsApp
            </Button>
            <Button 
              onClick={handleWhatsAppCTA}
              size="lg" 
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 border-none px-10 py-7 text-lg shadow-xl"
            >
              <PhoneCall className="w-6 h-6 mr-2" />
              Pesan Servis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoAC} alt="Servis AC Jogahan" className="h-12 w-12 object-contain rounded-lg" />
                <div>
                  <h4 className="font-bold text-xl text-white">Servis AC Bantul Yogyakarta</h4>
                  <p className="text-sm text-gray-400">Solusi AC Terbaik Anda</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Melayani jasa servis panggilan AC di area Bantul, Yogyakarta dan sekitarnya dengan fokus pada kecepatan, ketelitian, dan kepuasan pelanggan.
              </p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/abadijaya.teknikac/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/18KEr2G9yP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="mailto:ardi.sustanto@gmail.com" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Kontak */}
            <div>
              <h5 className="font-bold text-white mb-4">Kontak</h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <PhoneCall className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" />
                  <span>0878-2501-9502</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" />
                  <span>WhatsApp: 0878-2501-9502</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-red-400" />
                  <span>Jogahan, RT.03, Gaten, Canden, Kec. Jetis, Kabupaten Bantul, DIY 55781</span>
                </li>
              </ul>
            </div>

            {/* Jam Operasional */}
            <div>
              <h5 className="font-bold text-white mb-4">Jam Operasional</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Senin - Minggu</span>
                  <span className="text-white">07.00 - 18.00</span>
                </li>
              </ul>
              <div className="mt-4 bg-green-900 border border-green-700 rounded-lg p-3">
                <p className="text-green-300 text-xs font-medium">
                  <Clock className="w-3 h-3 inline mr-1" />
                  Siap Melayani 24 Jam
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 Servis AC Bantul Yogyakarta. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Tentang Kami</a>
                <a href="#" className="hover:text-white transition-colors">Layanan</a>
                <a href="#" className="hover:text-white transition-colors">Kontak</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}