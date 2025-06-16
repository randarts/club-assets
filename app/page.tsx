import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { Members } from "@/components/sections/Members"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">SNS Club, 무슨 동아리인가요?</h2>
          <div className="text-[#757575] leading-relaxed">
            <p>S&S는 네트워크, 서버 구성, 보안 실습, 정보 탐색, 로그 분석 등을 다루는 보안 동아리입니다.</p>
            <p>보안에 관심 있는 학부생들이 함께 실습하며 배우고, 다양한 프로젝트도 진행할 수 있습니다!</p>
          </div>
        </section>

        <section className="mb-16" id="about">
          <div className="grid gap-8">
            <div className="flex gap-6 items-start">
              <img src="http://placehold.co/32x24" alt="placeholder" className="w-32 h-24 bg-[#d9d9d9] rounded flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">보안 실습</h3>
                <div className="text-[#757575] text-sm leading-relaxed">
                  <p>네트워크 및 서버 구축부터 공격적인 실습까지!</p>
                  <p>UTM, IDS, ELK, Kali Linux 등을 활용한 다양한 보안 실습 기회,</p>
                  <p>ELK Stack, Splunk를 활용한 로그 분석 등 분석</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <img src="http://placehold.co/32x24" alt="placeholder" className="w-32 h-24 bg-[#d9d9d9] rounded flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">공격팀 vs. 방어팀 실전 실습</h3>
                <div className="text-[#757575] text-sm leading-relaxed">
                  <p>팀을 나누어 실제 해킹 & 방어 전략을 직접 실습!</p>
                  <p>다양한 보안 기술을 활용</p>
                  <p>서버, 리눅스, 네트워크 설정 등을 통해 공격합니다.</p>
                  <p>보안 공부는 직접, 실습을 위해서 함께 연구하고 토론합니다.</p>
                  <p>다양한 공격 기법들을 통해 방어할 수 있는 기술들을 기대하고 있습니다.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <img src="http://placehold.co/32x24" alt="placeholder" className="w-32 h-24 bg-[#d9d9d9] rounded flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">함께 성장합니다</h3>
                <div className="text-[#757575] text-sm leading-relaxed">
                  <p>네트워크, 서버, 정보 탐색, 웹보안 등 다양한 보안 기술을 연구합니다.</p>
                  <p>프로젝트를 기획·운영하며 실무에 가까운 경험을 쌓고, 보안 영역의 발전시킬 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16" id="activity">
          <div className="grid md:grid-cols-2 gap-8">
            <img src="http://placehold.co/600x400" alt="placeholder" className="w-full h-64 object-cover bg-[#d9d9d9] rounded" />
            <img src="http://placehold.co/600x400" alt="placeholder" className="w-full h-64 object-cover bg-[#d9d9d9] rounded" />
          </div>
        </section>

        <Members />

        <div id="contact" className="flex flex-col items-center justify-center gap-4 py-8">
          <h1 className="text-2xl font-semibold text-gray-800">아래 버튼을 눌러 연락하세요!</h1>
          <a 
            href="mailto:cistusf@jj.ac.kr?body=ICBM 지원서%0D%0A[이름 | 연락처 | 학번 | 학과]를 입력해주세요."
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            지원하기
          </a>
        </div>
      </main>

      <footer className="bg-[#f5f5f5] border-t border-[#e3e3e3] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-[#1e1e1e] mb-2">Family Site</h3>
              <div className="space-y-1 text-sm text-[#757575] flex flex-col gap-1">
                <a href="https://www.jj.ac.kr/" target="_blank">Jeonju University</a>
                <a href="https://www.jj.ac.kr/cse" target="_blank">JJ.CSE</a>
                <a href="https://icbm.jj.ac.kr/" target="_blank">ICBM Labs</a>
              </div>
            </div>
            <div className="text-right">
              <img src="/jj_logo.png" alt="placeholder" className="w-42 h-16 rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
