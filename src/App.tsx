import { useState } from 'react';
import PortalKaryawan from './components/karyawan/PortalKaryawan';
import DashboardAdmin from './components/admin/DashboardAdmin';
import './index.css';

type View = 'home' | 'employee' | 'admin';

const features = [
  { icon: '◈', title: 'Aman & Terpercaya', text: 'Data HR tersimpan dengan kontrol akses dan keamanan berlapis.' },
  { icon: 'ϟ', title: 'Cepat & Efisien', text: 'Otomatisasi proses HR untuk menghemat waktu operasional.' },
  { icon: '⌁', title: 'Laporan Akurat', text: 'Pantau data, kehadiran, payroll, dan performa dengan jelas.' },
  { icon: '◎', title: 'Mudah Digunakan', text: 'Antarmuka modern dan intuitif untuk HR maupun karyawan.' },
];

function MiniDashboard() {
  return (
    <div className="dashboard-preview" aria-hidden="true">
      <div className="preview-topbar">
        <div className="preview-brand"><span className="mini-logo">M</span><b>MoonHR</b></div>
        <div className="preview-search">⌕ &nbsp; Cari karyawan...</div>
        <div className="preview-user"><span className="notification">3</span><span className="avatar">S</span> Super Admin&nbsp;⌄</div>
      </div>
      <div className="preview-body">
        <aside className="preview-side">
          {['Dashboard', 'Karyawan', 'Absensi', 'Cuti', 'Payroll', 'Kinerja', 'Laporan', 'Pengaturan'].map((item, i) => (
            <div className={`side-item ${i === 0 ? 'active' : ''}`} key={item}><span>{['⌂', '♙', '◷', '▣', '▤', '⌁', '▥', '⚙'][i]}</span>{item}</div>
          ))}
        </aside>
        <main className="preview-main">
          <div className="preview-heading"><div><small>OVERVIEW</small><h3>Dashboard</h3></div><span className="date-pill">7 Hari Terakhir ▾</span></div>
          <div className="stat-grid">
            <div className="stat"><small>Total Karyawan</small><strong>128</strong><em>↗ 12% dari bulan lalu</em></div>
            <div className="stat"><small>Hadir Hari Ini</small><strong>96</strong><em>75% dari total karyawan</em></div>
            <div className="stat"><small>Cuti Aktif</small><strong>8</strong><em>6% dari total karyawan</em></div>
            <div className="stat"><small>Izin Terbuka</small><strong>5</strong><em>Menunggu persetujuan</em></div>
          </div>
          <div className="chart-grid">
            <div className="panel chart-panel"><div className="panel-title"><b>Trend Kehadiran</b><span>7 Hari Terakhir</span></div><div className="chart"><div className="grid-line l1"/><div className="grid-line l2"/><div className="grid-line l3"/><svg viewBox="0 0 520 160" preserveAspectRatio="none"><path d="M0 112 C35 110 48 62 86 78 S130 128 170 101 S214 70 250 92 S304 125 340 83 S390 55 424 69 S470 32 520 55" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/><path d="M0 112 C35 110 48 62 86 78 S130 128 170 101 S214 70 250 92 S304 125 340 83 S390 55 424 69 S470 32 520 55 L520 160 L0 160Z" fill="currentColor" opacity=".08"/></svg></div></div>
            <div className="panel distribution"><div className="panel-title"><b>Distribusi Karyawan</b><span>128 Total</span></div><div className="donut-wrap"><div className="donut"><div><strong>128</strong><small>Total</small></div></div><div className="legend"><span><i className="dot d1"/>Engineering <b>45%</b></span><span><i className="dot d2"/>Marketing <b>20%</b></span><span><i className="dot d3"/>HRD <b>15%</b></span><span><i className="dot d4"/>Finance <b>10%</b></span><span><i className="dot d5"/>Lainnya <b>10%</b></span></div></div></div>
          </div>
          <div className="bottom-panels"><div className="panel list-panel"><div className="panel-title"><b>Karyawan Terbaru</b><span>Lihat Semua →</span></div>{['Rizky Pratama', 'Siti Aisyah', 'Budi Santoso'].map((n, i)=><div className="person" key={n}><span className="avatar small">{n[0]}</span><div><b>{n}</b><small>{['Software Engineer','UI/UX Designer','HR Generalist'][i]}</small></div><em>Masuk<br/>0{i+7}:0{i+1}</em></div>)}</div><div className="panel list-panel"><div className="panel-title"><b>Pengajuan Cuti Terbaru</b><span>Lihat Semua →</span></div>{[['Andi Wijaya','Cuti Tahunan','2 hari','Menunggu'],['Dewi Lestari','Sakit','1 hari','Menunggu'],['Muhammad Fadil','Cuti Tahunan','3 hari','Disetujui']].map(r=><div className="leave-row" key={r[0]}><div><b>{r[0]}</b><small>{r[1]}</small></div><span>{r[2]}</span><em className={r[3] === 'Disetujui' ? 'approved' : ''}>{r[3]}</em></div>)}</div></div>
        </main>
      </div>
    </div>
  );
}

function Home({ setView }: { setView: (view: View) => void }) {
  return (
    <div className="home-page">
      <div className="space-bg"><span className="star s1"/><span className="star s2"/><span className="star s3"/><span className="star s4"/><span className="star s5"/><span className="star s6"/><div className="orbit orbit-1"/><div className="orbit orbit-2"/><div className="moon-glow"/><div className="moon"/></div>
      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow-gold">PEOPLE &amp; WORKFORCE PLATFORM</div>
          <h1 className="project-mark"><span>PROJECT X</span><strong>MOON</strong></h1>
          <div className="tagline">Smart HR. <span>Better Future.</span></div>
          <h2>Kelola karyawan <span>lebih rapi,</span><br/>cepat, dan terukur.</h2>
          <p>ProjectXmoon menghubungkan absensi, data karyawan, payroll, dan laporan dalam satu dashboard modern untuk mendukung produktivitas tim Anda.</p>
          <div className="hero-actions"><button className="gold-btn" onClick={() => setView('admin')}>Buka Dashboard HR <b>→</b></button><button className="outline-btn" onClick={() => setView('employee')}>Portal Karyawan <b>→</b></button></div>
        </div>
        <div className="hero-visual"><MiniDashboard /></div>
      </section>
      <section className="feature-strip">{features.map(f => <div className="feature" key={f.title}><div className="feature-icon">{f.icon}</div><div><h3>{f.title}</h3><p>{f.text}</p></div></div>)}</section>
      <footer>© 2026 <span>ProjectXmoon</span>. All rights reserved.</footer>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<View>('home');
  if (view === 'admin') return <DashboardAdmin />;
  if (view === 'employee') return <div className="public-page"><button className="back-home" onClick={() => setView('home')}>← Kembali ke Beranda</button><PortalKaryawan /></div>;
  return <div className="app-root"><header className="public-nav"><button className="brand-button" onClick={() => setView('home')}><span className="brand-mark">M</span><span>MoonHR</span></button><nav><button className="nav-link active" onClick={() => setView('home')}>Beranda</button><button className="nav-link" onClick={() => setView('employee')}>Portal Karyawan</button><button className="nav-link" onClick={() => setView('admin')}>Dashboard HR</button><button className="login-btn" onClick={() => setView('admin')}>♙ &nbsp; Login</button><span className="theme-pill">☾ ◐</span></nav></header><Home setView={setView} /></div>;
}
