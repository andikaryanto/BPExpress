
import express from 'express';
import App from './Core/App';

const app = express();
App.run(app, app);
