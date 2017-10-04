import React from 'react';
import alex from './img/alex.png';
import dani from './img/dani.png';
import gabi from './img/gabi.png';
import german from './img/german.png';
import manu from './img/manu.png';
import sergio from './img/sergio.png';
import { FormattedHTMLMessage } from 'react-intl';

import './styles.scss';

const Linkedin = () =>
  (
    <aside className='linkedin-grid'>
      <nav>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/alejandrodiegoo/?ppe=1' target="_blank" title="Alejandro Diego - Front End Developer">
              <img src={ alex } alt='Alejandro Diego' className='profile-picture'/>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/daniel-garc%C3%ADa-garc%C3%ADa-a71a9555/' target="_blank" title="Daniel García - IT Consultant & Back-end Developer">
              <img src={ dani } alt='Daniel Garcia' className='profile-picture' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/gabrielandujar/' target="_blank" title="Gabriel Andújar - Consultor & Frontender ">
              <img src={ gabi } alt='Gabriel Andujar' className='profile-picture' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/german-m-m/' target="_blank" title="Germán Martos - IT Analyst & Back-end Developer">
              <img src={ german } alt='German Martos' className='profile-picture' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/manuel-alfaro-sierra-538b824b/?ppe=1' target="_blank" title="Manuel Alfaro - Desarrollador de JavaScript">
              <img src={ manu } alt='Manuel Alfaro' className='profile-picture' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/sergio-maldonado-fern%C3%A1ndez-39608a147/' target="_blank" title="Sergio Maldonado - Back-end Developer">
              <img src={ sergio } alt='Sergio Maldonado' className='profile-picture' />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );

export default Linkedin;
