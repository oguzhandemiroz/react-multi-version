import React, {useState, Suspense} from 'react'

const Older = React.lazy(() => import('../older/App'));

const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <h1 style={{textAlign: "center"}}>
            Latest ({counter})

            <div>
                <button onClick={() => setCounter(counter+1)}>+</button>
                <button onClick={() => setCounter(counter-1)}>-</button>
            </div>

            <hr />

            <Suspense fallback={() => null}>
              <Older value={"Older"} counter={10}/>
            </Suspense>
        </h1>
    )
}

export default App
