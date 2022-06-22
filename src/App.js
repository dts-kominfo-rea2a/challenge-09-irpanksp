import './App.css';
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  const dataContacts = contacts.map(data =>    
    <Contact data={data} key={data.name} />
  )


  return (
    <div className="App">
      <Header />      
      {dataContacts}      
    </div>
  );
}

export default App;
