import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import './styles.scss';
//const message = FormattedHTMLMessage({id:'about.bioinfo.text'});
const Bioinfo = () =>
  (
    <aside className='about-text'>
      <FormattedHTMLMessage id='about.bioinfo.text' textComponent='aside.about-text' />
    </aside>
  );

export default Bioinfo;
