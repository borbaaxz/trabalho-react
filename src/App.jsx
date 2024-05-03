import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import Skills from "./components/Skills/Skills"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id='top' className="bg-zinc-800 text-white">
    <Header />

    <main>
      <About/>
      <Projects />
      <Skills/>
      <Contact/>
    </main>

    <ScrollToTop />
    <Footer/>
  </div>
  )
}

export default App
