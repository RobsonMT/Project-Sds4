import DataTable from 'assets/css/components/DataTable';
import Footer from 'assets/css/components/Footer';
import NavBar from 'assets/css/components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
