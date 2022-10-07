import './App.css';
import Footer from './components/Footer/Footer';
import JobsSection from './components/Jobs_Network/JobsSection';
import Questions from './components/Questions/Questions';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <div className='main-body' >
        <SideBar />
        <Questions />
        <JobsSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
