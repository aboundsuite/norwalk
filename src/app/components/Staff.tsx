import React from 'react';

const staffMembers = [
  {
    name: 'Don Ball Jr',
    title: 'Senior Pastor',
    bio: `Pastor has been in ministry since 1993. He was saved at the age of 6 and was called to preach at the age of 16. 
          After his call to preach, he went to Baptist Bible College in Springfield, Missouri, where he met his wife Kelly and were married in 1993. 
          In 1995, Pastor Ball graduated with a bachelor's degree and was on staff at Tabernacle Baptist Church. 
          He and his wife have been serving the church for over 27 years and he has been the Pastor for over 16 years. 
          Pastor Ball and Mrs. Kelly have four children: Maggie, Caleb, Stephen, and Ben.`,
    image: '/don_ball.jpg'
  },
  {
    name: 'Jake Schueler',
    title: 'Assistant Pastor',
    bio: ``,
    image: '/jake_schueler.jpg'
  }
  // Add more staff members here
];

const Staff = () => {
  return (
    <section id="staff" className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="container mx-auto p-8" style={{ maxWidth: '940px' }}>
        <h1 className="text-4xl font-bold text-center mb-20 text-blue-900">Our Team</h1>
        {staffMembers.map((staff, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-24 items-center md:items-start">
            <div className="flex-1 flex justify-center md:justify-end mb-6 md:mb-0">
              <img
                src={staff.image}
                alt={staff.name}
                className="object-cover h-64 w-64 rounded-full"
              />
            </div>
            <div className="flex-1 md:ml-8 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2 text-blue-900">{staff.name}</h2>
              <h3 className="text-xl font-bold mb-4 text-blue-500">{staff.title}</h3>
              <p className="text-lg text-gray-700">{staff.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Staff;
