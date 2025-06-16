export const Header = () => {
  return (
    <header className="bg-[#ffffff] border-b border-[#e3e3e3] px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="placeholder" className="w-8 h-8 rounded flex items-center justify-center" />
          <span className="text-xl font-semibold text-[#1e1e1e]">S&S</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-[#757575] hover:text-[#1e1e1e] text-sm">
            HOME
          </a>
          <a href="#about" className="text-[#757575] hover:text-[#1e1e1e] text-sm">
            About
          </a>
          <a href="#contact" className="text-[#757575] hover:text-[#1e1e1e] text-sm">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
} 