"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Website kafe saya jadi lebih profesional. Pelanggan sekarang bisa lihat menu dan pesan lewat website. Omzet naik 40% dalam 2 bulan.",
    author: "Sari Dewi",
    role: "Pemilik, Warung Kopi Sari",
    rating: 5,
  },
  {
    quote:
      "Landing page untuk jasa catering saya sangat membantu. Banyak klien baru yang datang dari pencarian Google. Recommended!",
    author: "Budi Santoso",
    role: "Owner, Catering Budi",
    rating: 5,
  },
  {
    quote:
      "Dulu bisnis jahit saya cuma dari mulut ke mulut. Sekarang punya website dan bisa terima pesanan online. Terima kasih RYNEX!",
    author: "Murni Handayani",
    role: "Pemilik, Jahit Murni",
    rating: 5,
  },
  {
    quote:
      "Toko kelontong saya sekarang punya katalog online. Pelanggan bisa lihat stok barang tanpa harus datang. Sangat membantu.",
    author: "Agus Wijaya",
    role: "Pemilik, Toko Agung",
    rating: 5,
  },
  {
    quote:
      "Saya punya usaha frozen food, dengan website pesanan jadi lebih teratur. Harganya terjangkau untuk UMKM seperti saya.",
    author: "Rina Fitriani",
    role: "Owner, Frozen Food Rina",
    rating: 4,
  },
  {
    quote:
      "Proses bikin website cepat dan hasilnya keren banget. Banyak tetangga yang tanya buat bikin juga. Makasih tim RYNEX!",
    author: "Hendra Gunawan",
    role: "Pemilik, Bengkel Hendra",
    rating: 5,
  },
  {
    quote:
      "Dulu bingung cara promosi online, sekarang punya website perusahaan. Pelanggan bilang usaha saya keliatan lebih bonafide.",
    author: "Dewi Rahmawati",
    role: "Owner, Dewi Salon",
    rating: 5,
  },
  {
    quote:
      "Dashboard penjualan untuk warung saya bikin lebih mudah lihat keuntungan harian. Cocok banget buat pemilik UMKM.",
    author: "Tono Prasetyo",
    role: "Pemilik, Warung Tono",
    rating: 5,
  },
  {
    quote:
      "Bikin website laundry sekarang pesanan bisa di-track online. Pelanggan suka, saya juga jadi lebih tenang.",
    author: "Lilis Sulastri",
    role: "Owner, Laundry Lilis",
    rating: 4,
  },
  {
    quote:
      "Website galeri saya jadi tempat pamer karya sekaligus terima pesanan. Tampilannya elegan, cocok buat brand saya.",
    author: "Putri Ayu Ningrum",
    role: "Pemilik, Galeri Putri",
    rating: 5,
  },
  {
    quote:
      "Usaha konveksi saya jadi lebih dikenal setelah punya website. Sekarang bisa terima order dari luar kota. Luar biasa!",
    author: "Andi Saputra",
    role: "Owner, Konveksi Andi",
    rating: 5,
  },
  {
    quote:
      "Service yang ramah dan hasil yang memuaskan. Website untuk usaha fotografi saya sekarang jadi portofolio online yang profesional.",
    author: "Dimas Ardian",
    role: "Fotografer, Dimas Photo",
    rating: 5,
  },
  {
    quote:
      "Saya punya bisnis oleh-oleh, dengan website jangkauan pasar jadi lebih luas. Banyak order dari luar kota. Rekomendasi!",
    author: "Nadia Rahma",
    role: "Owner, Oleh-Oleh Nadia",
    rating: 5,
  },
  {
    quote:
      "Awalnya ragu karena gaptek, tapi tim RYNEX bimbing dari awal sampai jadi. Sekarang website toko saya jalan terus.",
    author: "Pak Slamet",
    role: "Pemilik, Toko Slamet",
    rating: 4,
  },
  {
    quote:
      "Katering rumahan saya sekarang punya website dengan menu online. Pelanggan bilang tampilannya bersih dan gampang dipake.",
    author: "Mega Sari",
    role: "Owner, Mega Catering",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating ? "fill-primary text-primary" : "text-border fill-none"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="spacious-section overflow-hidden" id="testimonials">
      <div className="mx-auto mb-10 max-w-3xl px-4 text-center md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Testimoni
          </span>
          <h2 className="mt-4 mb-4 text-2xl font-bold md:text-4xl md:text-5xl">
            Yang Mereka Katakan
          </h2>
          <p className="text-muted-foreground text-lg">
            Kisah nyata dari para pelaku UMKM yang telah menggunakan layanan
            kami.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee-testimonial flex gap-4 px-4 md:gap-6 md:px-8">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={`${item.author}-${i}`}
              className="w-[85vw] min-w-[260px] shrink-0 md:max-w-[380px]"
            >
              <div className="hover:border-primary/20 border-border bg-card hover:bg-card/80 h-full rounded-2xl border p-5 transition-[background-color,border-color] duration-300 md:p-6">
                <div className="mb-3 flex items-center justify-between md:mb-4">
                  <Quote className="text-primary/20 h-5 w-5 md:h-6 md:w-6" />
                  <StarRating rating={item.rating} />
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed italic md:mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="border-border/50 border-t pt-3 md:pt-4">
                  <p className="text-sm font-semibold">{item.author}</p>
                  <p className="text-muted-foreground font-mono text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
