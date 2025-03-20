import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative w-full h-screen bg-no-repeat bg-cover text-white bg-center flex flex-col justify-center items-center  px-6 text-center"
      style={{ backgroundImage: "url('herobg-3.jpg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0.2px_0.2px_0.2px_black] ">Welcome to Our Landing Page</h1>
      <p className="max-w-2xl text-sm md:text-lg lg:text-xl drop-shadow-[0.2px_0.2px_0.2px_white]">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
        Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
        desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
      </p>
    </section>
  );
}

export default Hero;
