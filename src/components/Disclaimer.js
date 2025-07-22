import React, { useEffect, useState } from 'react';

const Disclaimer = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timeout); // cleanup
  }, []);

  return (
    <div className="absolute top-2 left-96 z-50">
      {visible && (
        <p className="text-white bg-blue-500 px-4 py-2 rounded shadow transition-opacity duration-500 ease-in">
          Disclaimer: This is not the offical NETFLIX webpage! Its a learning project please don't share your private credentials here!
        </p>
      )}
    </div>
  );
};

export default Disclaimer;
