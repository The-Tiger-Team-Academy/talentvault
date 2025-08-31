import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import VideoPlayerSection from "@/components/video-player-section"
import DigitalCredentialReport from "@/components/digital-credential-report"
import PartnerLogosSection from "@/components/partner-logos-section"
import ResumeEvolutionSection from "@/components/resume-evolution-section"
import SolutionSection from "@/components/solution-section"
import ContentSlidesSection from "@/components/content-slides-section"
import FinalCTASection from "@/components/final-cta-section"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DigitalCredentialReport />
        <VideoPlayerSection />
        <PartnerLogosSection />
        <ResumeEvolutionSection />
        <SolutionSection />
        <ContentSlidesSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
