export const Hero = () => {
  return (
    <section className="relative h-96 flex items-center justify-center">
      <img src="/Hero%20Basic.png" alt="placeholder" className="w-full h-full object-cover rounded absolute top-0 left-0 z-0 blur-sm" />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4 text-[#1e1e1e]">S&S Club</h1>
        <div className="text-lg text-[#2c2c2c] max-w-2xl mx-auto leading-relaxed">
          <p>전주대학교의 연구 동아리로</p>
          <p>사물인터넷, 빅데이터, 인공지능 등</p>
          <p>다양한 분야에서 연구하고 개발하며 실제 서비스까지 실현하는</p>
          <p>저희는 S&S CLUB 입니다.</p>
        </div>
      </div>
    </section>
  )
} 