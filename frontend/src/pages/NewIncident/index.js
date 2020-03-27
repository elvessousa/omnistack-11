import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const orgId = localStorage.getItem('orgId');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          authorization: orgId
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Não foi possível criar o caso.')
    }
  }

  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo"/>
          <h1>Cadastrar novo caso</h1>
          <p>Faça o seu cadastro de um novo caso usando os campos ao lado.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color = "#E02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso" 
            value={title}
            onChange={ e => setTitle(e.target.value) }
          />
          <textarea 
            placeholder="Descrição" style={{ marginTop: 8 }}
            value={description}
            onChange={ e => setDescription(e.target.value) }
          />
          <input 
            placeholder="Valor em reais" 
            value={value}
            onChange={ e => setValue(e.target.value) }
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

