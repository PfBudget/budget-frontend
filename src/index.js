import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { NavigationProvider } from "./context/navigation";
import { store } from "./store";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Provider>
);