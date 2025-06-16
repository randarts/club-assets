import { Shield } from "lucide-react"
import { MEMBERS } from "@/constants/members"
import { Member } from "@/types/member"

const MemberCard = ({ name, position, description }: Member) => (
  <div className="bg-white border border-[#e3e3e3] rounded-lg p-6 text-center shadow-sm">
    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <Shield className="w-8 h-8 text-white fill-white" />
    </div>
    <h3 className="font-semibold text-[#1e1e1e] mb-1">{name}</h3>
    <p className="text-sm text-[#757575] mb-2">{position}</p>
    <p className="text-xs text-[#757575] bg-[#f5f5f5] px-2 py-1 rounded">{description}</p>
  </div>
)

export const Members = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-[#1e1e1e] text-center mb-2">동아리원</h2>
      <p className="text-[#757575] text-center mb-8">S&S의 동아리원들을 소개합니다.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MEMBERS.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  )
} 