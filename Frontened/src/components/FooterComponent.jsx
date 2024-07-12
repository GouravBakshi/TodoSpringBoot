import React from 'react';

const FooterComponent = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <p>&copy; {new Date().getFullYear()} Gourav-Todo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
