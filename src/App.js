import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Service from './components/Service';

// ------------- импорт массива с данными карточек услуг -------------
import services from './js/servisesList';

function App() {
	return (
		<div className="App">
			<Header title="Solutions for people like you" />

			<main className="main">
				<div className="container">
					<div className="main__services services">
						{services.map(service => ( /* реализация генерации карточек из массива services */
							<Service key={service.id} service={service} />
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default App;
