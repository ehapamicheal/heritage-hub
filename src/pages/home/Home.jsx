import './home.css';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import HistoryType from '../../components/HistoryType';
import HistorySlider from '../../components/HistorySlider';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HistoryType />
      <HistorySlider />
      <Footer />

    </>
  )
}

export default Home;