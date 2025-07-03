import './App.css'

function ShootingStar() {
  // สร้างดาวหางสุ่มตำแหน่งและดีเลย์
  const top = Math.random() * 80 + 5
  const delay = Math.random() * 5
  const duration = Math.random() * 1 + 1.8
  return (
    <div
      className="shooting-star"
      style={{
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  )
}

function Rocket() {
  // จรวดพุ่งแนวนอนจากซ้ายไปขวา ล่างจอ
  return (
    <div className="rocket-horizontal-container">
      <div className="rocket-horizontal">
        <div className="rocket-body" />
        <div className="rocket-window" />
        <div className="rocket-fire-horizontal" />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="space-bg">
      {/* BG Effect Layer */}
      <div className="bg-effect">
        {[...Array(7)].map((_, i) => <ShootingStar key={i} />)}
        <Rocket />
      </div>
      {/* Content Layer */}
      <div className="content-wrapper">
        <header className="header">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="My GitHub"
            className="avatar"
          />
          <h1>My GitHub Universe</h1>
          <h2>ยินดีต้อนรับสู่จักรวาลนักพัฒนา</h2>
        </header>
        <main className="main-content">
          <p>
            สวัสดี! ผมคือ <span className="highlight">[Gotjitag]</span> <br />
            นักพัฒนาและผู้สร้างสรรค์ผลงานบน GitHub <br />
            สำรวจโปรเจกต์สุดล้ำ, แชร์ความรู้, และร่วมเดินทางสู่อวกาศแห่งโค้ดไปด้วยกัน!
          </p>
          <a
            href="https://github.com/khonE3"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            เยี่ยมชม GitHub ของฉัน
          </a>
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} [Gotjitag] | 🚀
        </footer>
      </div>
    </div>
  )
}

export default App

