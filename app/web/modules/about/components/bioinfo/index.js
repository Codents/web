import React from 'react';
import { FormattedMessage } from 'react-intl';

import './styles.scss';

const Bioinfo = () =>
  (
    <aside className='about-text'>
      <FormattedMessage id='about.bioinfo.text' />
    </aside>
  );

export default Bioinfo;
