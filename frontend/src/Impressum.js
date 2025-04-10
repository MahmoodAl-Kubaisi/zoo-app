// src/Impressum.js

import React from 'react';

const Impressum = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Impressum</h1>
      <p>Angaben gemäss John Al-Kubaisi:</p>
      <p>
        Max Mustermann<br />
        Musterstrasse 1<br />
        12345 Musterstadt
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 01234 / 56789<br />
        E-Mail: info@example.com
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>

      <h1>Datenschutzerklärung</h1>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften behandelt.
      </p>

      <p>
        Weitere Informationen folgen je nach Projektanforderungen.
      </p>
    </div>
  );
};

export default Impressum;
