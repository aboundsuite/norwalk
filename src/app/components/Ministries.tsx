import React from 'react';

const ministries = [
  {
    name: 'Nursery',
    description: `Nothing is more precious than a nursery full of young babies. Tabernacle Baptist Church has a
nursery where experienced mothers and workers take care of babies so their parents can focus on God speaking to them in the service.`,
    image: '/nursery.jpg'
  },
  
  {
    name: 'Free Day Away',
    description: `Free Day Away offers a break for parents and a fun-filled day for kids, filled with activities and learning.`,
    image: '/free_day_away.jpg'
  },

  {
    name: 'Sunday School',
    description: `The Sunday School Ministry is a big part of Tabernacle Baptist Church. We have different classes for all different ages who are in different stages in life. The goal of each group is to grow closer with your church family and learn more about God.`,
    image: '/sunday_school.jpg'
  },

  {
    name: 'Teen Ministry',
    description: `The Teen years are a very pivotal stage in everybody’s life. Therefore, we strive to create a fun.`,
    image: '/teen_ministry.jpg'
  },
  {
    name: 'Children\'s Ministry',
    description: `At Tabernacle Baptist Church we value and protectour Children. They are the future leaders.`,
    image: '/childrens_ministry.jpg'
  },

  {
    name: 'Tabernacle Christian Academy',
    description: `Our School has been established since 1980. Since then our primary goal has been to educate students and sharpen their abilities to be an asset to society and honor God.`,
    image: '/childrens_academy.jpg'
  },

  {
    name: 'Bus Ministry',
    description: `Tabernacle Baptist Church has been serving our community by picking up people of all ages and giving them an opportunity to be a part of our Church and Worship God. Our goal is to show them the love of God and a church that cares about them.`,
    image: '/bus_ministry.jpg'
  }
];

const Ministries = () => {
  return (
    <section className="p-8 bg-white">
      <div className="container mx-auto" style={{ maxWidth: '940px' }}>
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Ministries</h1>
        {ministries.map((ministry, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-24 items-center md:items-start">
            <div className="flex-1 flex justify-center md:justify-end mb-6 md:mb-0">
              <img
                src={ministry.image}
                alt={ministry.name}
                className="object-cover h-72 w-72 rounded-lg"
              />
            </div>
            <div className="flex-1 md:ml-8 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2 text-blue-900">{ministry.name}</h2>
              <p className="text-lg text-gray-700">{ministry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ministries;
