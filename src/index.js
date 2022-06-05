import { createRoot } from 'react-dom/client';
import './styles/style.css';
import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
