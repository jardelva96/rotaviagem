import '@testing-library/jest-dom';
import axios from 'axios';

jest.mock('axios');

// Mock do window.alert para evitar erros em testes
global.alert = jest.fn();
