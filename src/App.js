import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import { 
  HeaderComponent,
  FooterComponent,
  HoneymoonPackagesComponent,
  NorthIndianToursComponent,
  PremiumFeaturesComponent,
  KeralaFestivalTourComponent
} from './components/widgets';

function App() {
  return (
    <div className="p-0">
      <HeaderComponent/>
      <div className='container-section'>
        <HoneymoonPackagesComponent/>
      </div>
      <KeralaFestivalTourComponent/>
      <NorthIndianToursComponent/>
      <PremiumFeaturesComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
