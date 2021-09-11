import BarChart from 'assets/css/components/BarChart';
import DataTable from 'assets/css/components/DataTable';
import DonutChart from 'assets/css/components/DonutChart';
import Footer from 'assets/css/components/Footer';
import NavBar from 'assets/css/components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Participação nas Vendas</h5>
            <DonutChart/>
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>

        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
