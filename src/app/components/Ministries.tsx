import React from 'react';

const ministries = [
  {
    name: 'Nursery',
    description: `Our nursery is fully equipped and staffed by trained volunteers.
    They are committed to your child’s well-being and growth. Even at this young age, they are taught the principles of God’s Word. Our nursery is provided for all services.`,
    image: '/Church_Nursery.jpeg'
  },
  {
    name: 'Genesis Kids',
    description: `This worship service is designed for the kindergarten through the sixth grade to teach your child the principles of God at their level. This will provide a greater opportunity for the parent to participate in the adult worship service on Sunday mornings.`,
    image: '/Genesis_Kids_1.png'
  },
  {
    name: 'Sunday School',
    description: `We know that every single age group learns God’s word differently and with that in mind, we have made classes for all ages from nursery age class to our adult class. All of the Sunday school teachers are teaching the same lesson for each class and at each one of these classes they are taught in an age-appropriate manner. God has led us to have our Sunday school classes this way to build unity and discussion of the Bible in the homes of our Sunday school attendees.`,
    image: '/sunday_school.jpeg'
  },
  {
    name: 'Bus Ministry',
    description: `We have a bus ministry that is ever-expanding to reach people for Christ. We go into all of the communities in our area to bring people to our church, who are not able to come on their own.`,
    image: '/bus_ministry.jpeg'
  },
  {
    name: 'Church Soul Winning and Visitation',
    description: `To fulfill the Great Commission, we have weekly visitation opportunities to reach the lost for Christ and to encourage church members.`,
    image: '/Soul_Winning.jpeg'
  },
  {
    name: 'Food Pantry',
    description: `We live in such a needy time for people physically. Our purpose may be to give food to anyone that needs it, but ultimately our goal is to reach our community with the Gospel of Christ. We want the people to be fed spiritually, not just physically.`,
    image: '/Food_pantry_1.png'
  },
  {
    name: 'Teen Life',
    description: `Teen Life is our ministry that is designed to reach young people during the most formative years of their lives, 7th to 12th grade. We want to instill in our teenagers that God’s word is truth and that our study of it is vital to our walk with Christ. Our primary focus is to train our teenagers to read and understand the word of God and to earnestly contend for the faith which was once delivered unto the saints. We have monthly activities designed both around fun and fellowship as well as serving our church and community. We attend two to three Youth Conferences each year as well as our annual summer camp and SMITE evangelism training.`,
    image: '/Teen_Life.jpeg'
  },
  {
    name: 'Trail Life',
    description: `Trail Life USA is a Christ-centered, boy-focused organization with the goal of bringing up boys to not just become good men, but Godly ones. From the basics of map and compass reading to developing their abilities to think critically, Troop OH-0109 strives to continually teach these boys skills that are not only useful for camping out in the field but also in their everyday lives.`,
    image: '/Trail_Life.png'
  },
  {
    name: 'Senior Saints',
    description: `Our ministry gives senior adults a place to continue to grow in their faith and to show the wisdom they have achieved through experience. The purpose of the Senior Saints' ministry is to strengthen and encourage a community of senior adults and equip them to reach, teach, minister, and fellowship.`,
    image: '/Senior_Saints.png'
  },
  {
    name: 'Audio Visual Ministry',
    description: `Maintaining accessibility to the services of the Norwalk Baptist for all visitors and members in attendance, both in person and online.`,
    image: '/Audio_Visual.png'
  },
  {
    name: 'Nursing Home',
    description: `Our nursing home ministry is all about sharing the love of Christ with those who don't have the opportunity to make it to church. We want to bring not just church services, but the caring spirit of a community that follows Christ's love. Our mission is to create a warm environment in nursing homes, where residents can experience the love of Christ through our presence and support. Our hope is to bring the message of God's love right to their hearts, fostering a sense of community and connection in the midst of their living spaces.`,
    image: '/Nursing_Home.png'
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
