import React from 'react';
import { useTranslation } from 'react-i18next';

const CustomNavbarItem = () => {
  const { t } = useTranslation();

  return (
    <a 
      href="https://console.ocplanet.cloud/"
      target="_blank"
      style={{
        background: 'rgb(70, 113, 246)',
        fontWeight: 600,
        textDecoration: 'none',
        border: 'none',
        borderRadius: '8px',
        padding: '9px 12px',
        height: '38px',
        color: '#fff',
        fontSize: '16px'
      }}
    >
      {t('navbar.personalAccount')}s
    </a>
  );
};

export default CustomNavbarItem;
