import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();
  const orgId = localStorage.getItem('orgId');
  const orgName = localStorage.getItem('orgName');

  // Pega os casos ao entrar na rota
  useEffect(() => {
    api.get('profile', {
      headers: {
        authorization: orgId
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [orgId]);

  // Deleta casos
  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          authorization: orgId
        }
      });

      // Deletar em tempo real sem atualizar página
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Não foi possível deletar o caso devido a um erro.')
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return(
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Logo"/>
        <span>Bem vindo(a), {orgName}</span>
        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor: </strong>
            <p>{incident.value}</p>

            <button type="button" onClick={ () => handleDeleteIncident(incident.id) }>
              <FiTrash2 size={18} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}