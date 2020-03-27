const express = require('express');
const OrgController = require('./controllers/OrgController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Login
routes.post('/sessions', SessionController.create);

// Organizations
routes.get('/orgs', OrgController.index);
routes.post('/orgs', OrgController.create);

// Cases
routes.get('/profile', ProfileController.index);

// Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;