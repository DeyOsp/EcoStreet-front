import Header from "@components/header.jsx";
import HeroSection from "@components/hero-section.jsx";
import MapSection from "@components/map-section.jsx";
import ReportForm from "@components/report-form.jsx";
import CommunitySection from "@components/community-section.jsx";
import Footer from "@components/footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MapSection />
        <ReportForm />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
