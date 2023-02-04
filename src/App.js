import './App.css';
import Top from './Components/Top/Top';
import Bottom from './Components/Bottom/Bottom';
import Middle from './Components/Middle/Middle';

function App() {
  return (
    <>
      <section className='screen'>
        <section className='Mobile'>
          <Top />
          <Middle/>
          <Bottom/>
        </section>
      </section>
    </>
  );
}

export default App;
