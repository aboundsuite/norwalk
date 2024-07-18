import React from 'react';

const staffMembers = [
  {
    name: 'Rich Forman',
    title: 'Senior Pastor',
    bio: `Pastor Richard Forman has been the Pastor of Norwalk Baptist Church since November 2016. He has been married to his wife Melissa since 1999, and God has blessed them with four daughters. Pastor Forman was saved on November 5 of 2000, and after a revival service in 2005 answered the call to preach the Gospel of Jesus Christ. Through much prayer and council, God led Pastor and his family to The Crown College of the Bible in Powell Tennessee. It was there that God used Pastor Clarence Sexton, the Temple Baptist Church, and The Crown College to shape and prepare the Formans. It was during this time that Pastor earned his Bachelors degree and since then he has earned a Masters in Ministry. He is now faithfully serving as our Pastor and fellow servant of Jesus Christ.`,
    image: '/pastor_photo.png'
  },
  {
    name: 'Adam Loving',
    title: 'Youth Director',
    bio: `Adam Loving began working with our youth in January 2024. He married his amazing wife, Lia in 2009. Together they have four wonderful children, Annabelle, Caleb, Jonah, and Miriam. On September 4, 2011 Adam attended a church service at the behest of his wife. The pastor preached from the Gospel of John and by the end of the service he realized he was a sinner under condemnation and was headed for Hell. He went forward during the invitation and repented of his sins and placed his faith in Jesus Christ alone. In 2016 he began taking courses at Trinity Baptist College and graduated in 2023 with an Associate’s Degree in Biblical Studies. Adam served our country as a Senior Chief Petty Officer in the Navy and retired after 20 years of service in January of 2024.`,
    image: '/Adam_Loving_Photo.png'
  },
  {
    name: 'Aaron Graham',
    title: 'Children\'s Director',
    bio: `Aaron Graham alongside his wife, Julia, has been serving the children of Norwalk Baptist Church since 2022. They were married in July of that year. Together they have 1 child, Jude. Aaron has faithfully attended Norwalk Baptist Church since he was a baby and after a Sunday morning church service at the age of 9 Aaron realized he was a sinner on his way to hell and was saved that morning June 2009. After Highschool Aaron felt the call of God on his life to preach and full time ministry. So, in 2018 Aaron began at The Crown College of the Bible and graduated 2022 with a bachelors degree. There he cultivated a relationship with is now wife and married her shortly after graduation. Now together they are faithfully serving Norwalk Baptist Church and its children.`,
    image: '/Aaron_Graham_Photo.png'
  }
];




const Staff = () => {
  return (
    <section id="staff" className="py-40 bg-white px-8">
      <div className="container mx-auto" style={{ maxWidth: '940px' }}>
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Team</h1>
        {staffMembers.map((staff, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-12 items-center md:items-start">
            <div className="flex-1 flex justify-center md:justify-end mb-6 md:mb-0">
              <img
                src={staff.image}
                alt={staff.name}
                className="object-cover h-64 w-64 rounded-lg"
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
