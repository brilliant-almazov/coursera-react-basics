import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Counter from './Counter.js'

function App() {

    return (
        <>
            <Header/>
            <Main>
                <Counter/>
            </Main>
            <Footer/>
        </>
    )
}

export default App;