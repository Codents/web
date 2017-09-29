import React from 'react';
import alex from './img/alex.png';
import dani from './img/dani.png';
import gabi from './img/gabi.png';
import german from './img/default.png';
import manu from './img/manu.png';
import sergio from './img/default.png';

import './styles.scss';

const Linkedin = () =>
  (
    <aside className='linkedin-grid'>
      <nav>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/alejandrodiegoo/?ppe=1'>
              <img src={ alex } alt='Alejandro' className='profile-picture'/>
            </a>
          </li>
          <li>
            <a href='https://github.com/Codents/web'>
              <img src={ dani } alt='Daniel' className='profile-picture' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/gabrielandujar/'>
              <img src={ gabi } alt='Gabriel' className='profile-picture' />
            </a>
          </li>
          <li>
            <a href='https://github.com/Codents/web'>
              <img src={ german } alt='German' className='profile-picture' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/manuel-alfaro-sierra-538b824b/?ppe=1'>
              <img src={ manu } alt='Manuel' className='profile-picture' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/sergio-maldonado-fern%C3%A1ndez-39608a147/'>
              <img src={ sergio } alt='Sergio' className='profile-picture' />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );

export default Linkedin;
