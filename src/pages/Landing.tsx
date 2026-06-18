import HeroSection from "../components/landing-page/HeroSection";
import TrustSection from "../components/landing-page/TrustSection";
import Footer from "../components/Footer";
import { useTheme } from "../theme/ThemeProvider";

export default function Landing() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col min-h-screen">
      <main id="main-content" className="flex-1">
        <HeroSection theme={theme} />
        <TrustSection theme={theme} />
      </main>
      <Footer />
    </div>
  );
}
