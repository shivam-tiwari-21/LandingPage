import React from 'react';

const Service = () => {
  return (
    <>
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          
          {/* Card-1 */}
          <div className="card card-side bg-base-100 shadow-2xl flex items-center p-4">
            <figure>
              <img className="w-30 h-30 object-contain" src="app-development.png" alt="Web development" />
            </figure>
            <div className="card-body pl-4">
              <p className="text-lg font-semibold">Web Development</p>
            </div>
          </div>

          {/* Card-2 */}
          <div className="card card-side bg-base-100 shadow-2xl flex items-center p-4">
            <figure>
              <img className="w-30 h-30 object-contain" src="ux-interface.png" alt="UI/UX Development" />
            </figure>
            <div className="card-body pl-4">
              <p className="text-lg font-semibold">UI/UX Development</p>
            </div>
          </div>

          {/* Card-3 */}
          <div className="card card-side bg-base-100 shadow-2xl flex items-center p-4">
            <figure>
              <img className="w-30 h-30 object-contain" src="seo.png" alt="SEO" />
            </figure>
            <div className="card-body pl-4">
              <p className="text-lg font-semibold">SEO Optimization</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Service;
