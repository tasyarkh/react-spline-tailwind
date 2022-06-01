import './index.css';
import Nav from './components/Nav';
import Name from './components/Name';
import Me from './components/Me';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div className='flex max-w-screen min-h-screen flex-col items-center justify-center relative bg-bck pb-20 overflow-hidden overscroll-contain'>
    <Nav/>
    <Name/>
    <main className='w-[90%] mt-2'>
      <Me/>
      <Experience/>
    </main>
    <Contact/>
    <h6 className='text-txt mt-11 mb-0 font-thin'>made by tasyarkh</h6>
    </div>
  );
}

export default App;
