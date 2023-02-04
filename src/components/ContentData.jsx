import React, { useState } from 'react';
import Content from './ShowContent';

const MainComponent = () => {
  const [contentArray, setContentArray] = useState([
    {
      id: 1,
      title: 'Ανακοίνωση για Painschool της EFIC',
      description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
    },
    {
        id: 2,
        title: "Title 3",
        description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
    },
    {
      id: 3,
      title: "Title 3",
      description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
  },
  {
    id: 4,
    title: "Title 3",
    description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
  },
  {
    id: 5,
    title: "Title 3",
    description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
  },
  {
    id: 6,
    title: "Title 3",
    description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
  },
  {
    id: 7,
    title: "Title 3",
    description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
  },
  {
    id: 8,
    title: "Title 3",
    description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
  },
  {
    id: 9,
    title: "Title 3",
    description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
  },
  {
    id: 10,
    title: "Title 3",
    description: 'Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία'
  }
  ]);

  return (
    <div>
      <Content contentArray={contentArray} />
    </div>
  );
  const addContent = (newContent) => {
    setContentArray([newContent, ...contentArray]);
  };
};

export default MainComponent;