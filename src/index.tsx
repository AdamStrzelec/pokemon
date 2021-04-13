import ReactDOM from 'react-dom';
import Root from './views/Root';
import './style.css';

const App = () => {

    return (
        <>
            <Root />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));