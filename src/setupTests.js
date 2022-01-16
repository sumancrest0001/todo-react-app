import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from './__mocks__/axios';
import enableHooks from 'jest-react-hooks-shallow';

global.axios = axios;
configure({ adapter: new Adapter() });
enableHooks(jest);