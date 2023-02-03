import './App.css';
import Top from './Components/Top/Top';
import Bottom from './Components/Bottom/Bottom';

function App() {
  return (
    <>
      <section className='screen'>
        <section className='Mobile'>
          <Top />
          <Bottom/>
        </section>
      </section>
    </>
  );
}

export default App;
