"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Settings,
  Palette,
  HeadphonesIcon,
  Star,
  Phone,
  Instagram,
  Facebook,
  Mail,
  ExternalLink,
  Zap,
  Users,
  BarChart3,
  Globe,
  Rocket,
  Heart,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";
import { FloatingElements } from "@/components/floating-elements";
import { GradientCard } from "@/components/gradient-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroRef = useRef(null);

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Pengembangan Website & Aplikasi",
      description:
        "Dari website company profile, landing page, hingga sistem berbasis web & mobile.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automasi dan Sistem Internal",
      description:
        "Pembuatan sistem custom seperti manajemen stok, absensi, CRM, dan dashboard laporan.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design & Prototyping",
      description:
        "Desain antarmuka interaktif yang intuitif dan fokus pada user journey.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Konsultasi IT & Maintenance",
      description:
        "Membantu Anda memilih teknologi terbaik dan memberikan support jangka panjang.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const portfolio = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Sistem Inventory untuk Toko Retail",
      description:
        "Aplikasi berbasis web untuk manajemen stok, laporan penjualan, dan data pelanggan.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Landing Page Event Organizer",
      description:
        "Desain dan pengembangan halaman promosi dengan CTA konversi tinggi.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dashboard Internal untuk Bisnis",
      description:
        "Sistem manajemen booking, dan jadwal berbasis database real-time.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const testimonials = [
    {
      text: "Pekerjaan Megantara sangat rapi dan komunikatif. Saya bisa paham alurnya meski bukan orang teknis.",
      author: "Nina",
      role: "Owner Online Shop",
      avatar: "👩‍💼",
    },
    {
      text: "Kami sekarang bisa pantau seluruh stok dan transaksi langsung dari HP.",
      author: "Pak Hadi",
      role: "Retail Manager",
      avatar: "👨‍💼",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <motion.header
        className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedLogo />
              <motion.span
                className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Megantara
              </motion.span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                <Link
                  href="https://instagram.com/yankek_"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                <Link
                  href="https://facebook.com/iwymega"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link href="https://wa.me/6285157263378">
                    <Phone className="h-4 w-4 mr-2" />
                    Hubungi Saya
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-4 overflow-hidden">
        <FloatingElements />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"
        />

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border-0"
              >
                <Zap className="h-3 w-3 mr-1" />
                Developer dan IT Solution
              </Badge>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
            >
              💻
            </motion.span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ml-4">
              Megantara
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-gray-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              "Membangun solusi digital yang relevan dan berdampak"
            </motion.span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
              >
                <Link href="https://wa.me/6285157263378">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="mr-2"
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  🔵 Hubungi Saya
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              >
                <Link href="#portfolio">
                  Lihat Portfolio
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <AnimatedCounter end={50} label="Proyek Selesai" suffix="+" />
            <AnimatedCounter end={30} label="Klien Puas" suffix="+" />
            <AnimatedCounter end={3} label="Tahun Pengalaman" suffix="+" />
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href="https://instagram.com/yankek_"
                className="text-blue-600 hover:text-purple-600 font-medium transition-colors"
              >
                🔗 Instagram
              </Link>
            </motion.div>
            <span className="text-gray-300">|</span>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href="https://facebook.com/iwymega"
                className="text-blue-600 hover:text-purple-600 font-medium transition-colors"
              >
                Facebook
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tentang Saya
          </motion.h2>

          <motion.div
            className="prose prose-lg mx-auto text-gray-600 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            <p className="text-center text-lg leading-relaxed">
              Halo! Saya Megantara, seorang Developer dan IT Solution Specialist
              yang berfokus pada pembuatan sistem digital yang efisien,
              fleksibel, dan berorientasi pada kebutuhan pengguna. Dengan latar
              belakang teknis dan pengalaman dalam berbagai proyek, saya siap
              membantu individu, UMKM, maupun korporasi untuk bertransformasi
              secara digital.
            </p>

            <motion.p
              className="text-center font-medium text-gray-800 mt-6 text-xl"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Heart className="inline-block w-5 h-5 text-red-500 mr-2" />
              Saya percaya bahwa teknologi bukan hanya soal tools, tetapi soal
              memecahkan masalah nyata melalui pendekatan yang tepat.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Keahlian dan Layanan
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <GradientCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient={service.gradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portofolio Pilihan
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />
                  <CardHeader className="relative">
                    <div className="flex items-center space-x-2 mb-2">
                      <motion.span
                        className="text-2xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.5,
                        }}
                      >
                        📌
                      </motion.span>
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} text-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {project.icon}
                      </motion.div>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600">
              (Contoh lainnya tersedia sesuai permintaan)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Apa Kata Klien
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-start space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>
                      <motion.span
                        className="text-3xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        {testimonial.avatar}
                      </motion.span>
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">
                        — {testimonial.author}
                      </div>
                      <div className="text-gray-500">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hubungi Saya
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: Phone,
                label: "WhatsApp",
                value: "0851-5726-3378",
                href: "https://wa.me/6285157263378",
                color: "text-green-600",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@yankek_",
                href: "https://instagram.com/yankek_",
                color: "text-pink-600",
              },
              {
                icon: Facebook,
                label: "Facebook",
                value: "facebook.com/iwymega",
                href: "https://facebook.com/iwymega",
                color: "text-blue-600",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/megantara",
                href: "https://www.linkedin.com/in/i-wayan-megantara-90233117a/",
                color: "text-blue-800",
              },
              // { icon: Mail, label: "Email", value: "Available on request", href: "#", color: "text-gray-600" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="pt-6 text-center">
                    <motion.div
                      className={`${contact.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.icon className="h-8 w-8" />
                    </motion.div>
                    <p className="font-semibold mb-2">{contact.label}</p>
                    <Link
                      href={contact.href}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {contact.value}
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.p
              className="text-lg text-gray-700 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="inline-block mr-2"
              >
                💬
              </motion.span>
              Ingin diskusi atau butuh solusi digital untuk bisnis Anda? Saya
              siap bantu!
            </motion.p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
              >
                <Link href="https://wa.me/6285157263378">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="mr-2"
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  Mulai Diskusi Sekarang
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2 }}
        />

        <div className="container mx-auto max-w-4xl text-center relative">
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          />

          <Separator className="mb-8 bg-gray-700" />

          <motion.div
            className="flex items-center justify-center space-x-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <AnimatedLogo />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Megantara
            </span>
          </motion.div>

          <motion.p
            className="text-gray-400 mb-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            © 2025 Megantara. All rights reserved.
          </motion.p>

          <motion.p
            className="text-gray-500 text-sm flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heart className="w-4 h-4 text-red-500 mr-2" />
            Dibuat dengan komitmen untuk menghadirkan solusi digital yang
            berdampak.
            <Rocket className="w-4 h-4 text-blue-400 ml-2" />
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
