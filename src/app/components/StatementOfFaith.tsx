import React from 'react';

const statements = [
  {
    title: 'The Holy Scriptures',
    content: `We believe the Holy Scriptures of the Old and New Testament to be the verbally and plenarily inspired Word of God. The Scriptures are inerrant, infallible and God-breathed and, therefore, are the complete and divine revelation of God to Man. The Scriptures shall be interpreted according to their normal grammatical-historical meaning, and all issues of interpretation and meaning shall be determined by the pastor. The King James Version of the Bible shall be the official and only translation used by the church. (2 Tim. 3:16-17; 2 Peter 1:20-21)`
  },
  {
    title: 'Dispensationalism',
    content: `We believe that the Scriptures interpreted in their natural, literal sense reveal divinely determined dispensations or rules of life which define man’s responsibilities in successive ages. These dispensations are not ways of salvation, but rather are divinely ordered stewardships by which God directs man according to His purpose. Three of these dispensations - the law, the church, and the kingdom - are the subjects of detailed revelation in Scripture. (Gen. 1:28; 1 Cor. 9:17; 2 Cor. 3:9-18; Gal. 3:13-25; Eph. 1:10, 3:2-10; Col. 1:24-25,27; Rev. 20:2-6)`
  },
  {
    title: 'The Godhead',
    content: `We believe in one triune God, Eternally existing in three persons - Father, Son, and Holy Spirit - each co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections. (Deut. 6:4; Matt. 28:19; John 14:10,26; 2 Cor. 13:14)`
  },
  {
    title: 'The Person and Work of Christ',
    content: `We believe that the Lord Jesus Christ, the eternal Son of God, became man, without ceasing to be God, having been conceived by the Holy Spirit and born of the virgin Mary, in order that He might reveal God and redeem sinful men. (Isa. 7:14, 9:6; Luke 1:35; John 1:1-2, 14; 2 Cor. 5:19-21; Gal. 4:4-5; Phil. 2:5-8)\nWe believe that the Lord Jesus Christ accomplished our redemption through His death on the cross as a representative, vicarious, substitutionary sacrifice; and that our justification is made sure by His literal, physical resurrection from the dead. (Acts 2:18-36; Rom. 3:24-25; Eph. 1:7; 1 Peter 2:24; 1 Peter 1:3-5)\nWe believe that the Lord Jesus Christ ascended to Heaven and is now exalted at the right hand of God where, as our High Priest, He fulfills the ministry of Representative, Intercessor, and Advocate. (Acts 1:9-10; Rom. 8:34; Heb. 9:24, 7:25; I John 2:1-2)`
  },
  {
    title: 'The Person and Work of the Holy Spirit',
    content: `We believe that the Holy Spirit is a person who convicts the world of sin, of righteousness, and of judgement; and, He is the Supernatural Agent in regeneration, baptizing all believers into the body of Christ, indwelling and sealing them unto the day of redemption. (John 16:8-11; Rom. 8:9; 1 Cor. 12:12-14; 2 Cor. 3:6; Eph. 1:13-14)\nWe believe that He is the divine Teacher who assists believers to understand and appropriate the Scriptures and that it is the privilege and duty of all the saved to be filled with the Spirit. (Eph. 1:17-18; 5:18; 1 John 2:20, 27)\nWe believe that God is sovereign in the bestowal of spiritual gifts to every believer. God uniquely uses evangelists, pastors, and teachers to equip believers in the assembly in order that they can do the work of the ministry. (Rom. 12:3-8; 1 Cor. 12:4-11, 28; Eph. 4:7-12)\nWe believe that the sign gifts of the Holy Spirit, such as speaking in tongues and the gift of healing, were temporary. Speaking in tongues was never the common or necessary sign of the baptism or filling of the Holy Spirit. Ultimate deliverance of the body from sickness or death awaits the consummation of our salvation in the resurrection, though God frequently chooses to answer the prayers of believers for physical healing. (1 Cor. 1:22, 13:8; 14:21-22)`
  },
  {
    title: 'The Total Depravity of Man',
    content: `We believe that man was created in the image and likeness of God: but that in Adam’s sin the human race fell, inherited a sinful nature, and became alienated from God. Man is totally depraved and of himself, utterly unable to remedy his lost condition. (Gen. 1:26-27; Rom. 3:22-23, 5:12, 6:23; Eph. 2:1-3,4:17-19)`
  },
  {
    title: 'Salvation',
    content: `We believe that salvation is the gift of God brought to man by grace and received by personal faith in the Lord Jesus Christ, Whose precious blood was shed on Calvary for the forgiveness of our sins. We believe that all sins, except blasphemy of the Holy Spirit, are forgivable. (Matt. 12:31-32; John 1:12, Eph.1:7;2:8-10, I Pet.1:18-19, I John 1:9)`
  },
  {
    title: 'The Eternal Security and Assurance of Believers',
    content: `We believe that all the redeemed, once saved are kept by God’s power and are thus secure in Christ forever. (John 6:37-40; 10:27-30, Rom. 8:1; 38-39, I Cor.1:4-8; I Pet. 1:4-5)\nWe believe that it is the privilege of believers to rejoice in the assurance of their salvation through the testimony of God’s Word, which, however, clearly forbids the use of Christian liberty as an occasion to the flesh. (Rom. 13:13-14; Gal. 5:13; Titus 2:11-15)`
  },
  {
    title: 'The Church',
    content: `We believe that the local church, which is the body and the espoused bride of Christ is solely made up of born-again persons. (I Cor. 12:12-14; 2 Cor. 11:2; Eph. 1:22-23; 5:25-27)\nWe believe that the establishment and continuance of local churches is clearly taught and defined in the New Testament Scriptures. (Acts 14:27; 20:17-28; I Tim 3:1-13; Titus 1:5-11)\nWe believe in the autonomy of the local church free of any external authority or control. (Acts 13:1-4, 15:19-31, 20:28; Rom. 16:1, 4; I Cor. 3:9, 16:5:4-7, 13, I Pet. 5:1-4)\nWe recognize water baptism and the Lord’s Supper as the Scriptural ordinances of obedience for the church in this age (Matt. 28:19-20; Acts 2:41-42; 18:18, I Cor. 11:23-26)`
  },
  {
    title: 'Separation',
    content: `We believe that all the saved should live in such a manner as not to bring reproach upon their Savior and Lord. God commands His people to separate from all religious apostasy, all worldly and sinful pleasures, practices, and associations, and to refrain from all immodest and immoderate appearances, piercings and bodily markings. (Lev. 19:28; Rom. 12:1-2, 14:13; I Cor. 6:19-20; 2 Cor. 6:14, 7:1; 2 Tim. 3:1-5; I John 2:15-17; 2 John 9-11)`
  },
  {
    title: 'The Second Advent of Christ',
    content: `We believe in the blessed hope, the personal imminent return of Christ. Who will rapture His church prior to the seven-year tribulation period. At the end of the Tribulation, Christ will personally and visibly return with His saints to establish His earthly Messianic Kingdom which was promised to the nation of Israel. (Psa. 89:3-4; Dan.2:31-45, Zech. 14:4-11; I Thes. 1:10, 4:13-18; Titus 2:13; Rev. 3:10; 19:11-16; 20:1-6)`
  },
  {
    title: 'The Eternal State',
    content: `We believe in the bodily resurrection of all men, the saved to eternal life, and the unsaved to judgment and everlasting punishment. (Matt. 25:46; John 5:28-29; 11:25-26; Rev. 20:5-6, 12-13)\nWe believe that the souls of the redeemed are, at death, absent from the body and present with the Lord, where in conscious bliss they await the first resurrection, when spirit, soul, and body are reunited to be glorified forever with the Lord. (Luke 23:43; 2 Cor. 5:8, Phil. 1:23; 3:21, I Thess. 4:16-17, Rev. 20:4-6)\nWe believe that the souls of unbelievers remain after death, in conscious punishment and torment until the second resurrection, when with soul and body reunited, they shall appear at the Great White Throne Judgement, and shall be cast into the Lake of Fire, not to be annihilated, but to suffer everlasting conscious punishment and torment. (Matt. 25:41-46; Mark 9:43-48; Luke 16:19-26; 2 Thes. 1:7-9; Jude 6-7; Rev. 20:11-15)`
  },
  {
    title: 'The Personality of Satan',
    content: `We believe that Satan is a person, the author of sin and the cause of the Fall of Man; that he is the open and declared enemy of God and man; and that he shall be eternally punished in the Lake of Fire. (Job 1:6-7; Isa. 14:12-17; Matt. 4:2-11: 25:41; Rev. 20:10)`
  },
  {
    title: 'Creation',
    content: `We believe that God created the universe in six literal, 24-hour periods. We reject evolution, the Gap Theory, the Day-Age Theory, and Theistic Evolution as unscriptural theories of origin. (Gen. 1-2; Ex. 20:11)`
  },
  {
    title: 'Civil Government',
    content: `We believe that God has ordained and created all authority consisting of three basic institutions: 1) the home, 2) the church, and 3) the state. Every person is subject to these authorities, but all (including the authorities themselves) are answerable to God and governed by His Word. God has given each institution specific Biblical responsibilities and balance those responsibilities with the understanding that no institution has the right to infringe upon the other. The home, the church, and the state are equal and sovereign in their respective Biblically assigned spheres of responsibility under God. (Rom. 13:1-7; Eph. 5:22-24; Heb. 13:17; I Pet. 2:13-14)`
  },
  {
    title: 'Human Sexuality',
    content: `We believe that God has commanded that no intimate sexual activity be engaged in outside of a marriage between one man and one woman. We believe that any form of homosexuality, lesbianism, bisexuality, bestiality, incest, fornication, adultery, and pornography are sinful perversions of God’s gift of sex. We believe that God disapproves of and forbids any attempt to alter one’s gender by surgery or appearance. (Gen. 2:24, 19:5, 26:8-9; Lev. 18:1-30; Rom. 1:26-29; 1 Cor. 5:1, 6:9; 1 Thes. 4:1-8; Heb. 13:4)\nWe believe that the only Scriptural marriage is the joining of one man and one woman. (Gen. 2:24; Rom. 7:2; 1 Cor. 7:10; Eph. 5:22-23)`
  },
  {
    title: 'Family Relationships',
    content: `We believe that men and women are spiritually equal in position before God but that God has ordained distinct separate spiritual functions for men and women in the home and the church. The husband is to be the leader of the home, and men are to be the leaders (pastors and deacons) of the church. Accordingly, only men are eligible for licensure and ordination by the church. (Gal. 3:28; Col. 3:18; 1 Tim. 2:8-15, 3:4-5,12)\nWe believe that God has ordained the family as the foundational institution of human society. The husband is to love his wife as Christ loves the church. The wife is to submit herself to the Spiritual leadership of her husband as the church submits to the leadership of Christ. Children are a heritage from the Lord. Parents are responsible for teaching their children spiritual and moral values and leading them, through consistent lifestyle example and appropriate discipline, including Spiritual corporal correction. (Gen. 1:26-28; Ex. 20:12; Deut. 6:4-9; Ps. 127:3-5; Prov. 19:18-22, 23:13-14; Mark 10:6-12; 1 Cor. 7:1-16; Eph. 5:21-33, 6:1-4; Col. 3:18-21; Heb. 13:4; 1 Peter 3:1-7)`
  },
  {
    title: 'Divorce and Remarriage',
    content: `We believe that God disapproves of and forbids divorce and intends marriage to last until one of the spouses dies, and that he regards divorce and remarriage as adultery. Although divorced and remarried persons or divorced persons may hold positions of service in the church and be greatly used by God for Christian service, they may not be considered for the offices of pastor or deacon. (Mal. 2:14-17; Matt. 19:3-12; Rom. 7:1-3; 1 Tim. 3:2,12; Titus 1:6)`
  },
  {
    title: 'Abortion',
    content: `We believe that human life begins at conception and that the unborn child is a living human being. Abortion constitutes the unjustified, unexcused taking of unborn human life. Abortion is murder. We reject any teaching that abortions of pregnancies due to rape, incest, birth defects, gender selection, birth or population control, or the physical or mental well being of the mother are acceptable. (Job 3:16; Ps. 51:5, 139:14-16; Isa. 44:24, 49:1,5; Jer. 1:5, 20:15-18; Luke 1:44)`
  },
  {
    title: 'Euthanasia',
    content: `We believe that the direct taking of an innocent human life is a moral evil, regardless of the intention. Life is a gift of God and must be respected from conception to natural death. Thus we believe that an act or omission which, of itself or by intention, causes death in order to eliminate suffering constitutes a murder contrary to the will of God. Discontinuing medical procedures that are extraordinary or disproportionate to the expected outcome can be a legitimate refusal of over-zealous treatment. (Ex. 20:13, 23:7; Matt. 5:21: Acts 17:28)`
  },
  {
    title: 'Love',
    content: `We believe that we should demonstrate love for others, not only toward fellow believers, but also toward both those who are not believers, those who oppose us, and those who engage in sinful actions. We are deal with those who oppose us graciously, gently, patiently, and humbly. God forbids the stirring up strife, the taking of revenge, or the threat or the use of violence as a means of resolving personal conflict of revenge, or obtaining personal justice. Although God commands us to abhor sinful actions, we are to love and pray for any person who engages in such actions. ( Lev. 19:18, Matt. 5:44-48; Luke 6:31; John 13:34-35; Rom. 12:9-10, 17-21, 13:8-10; Phil. 2:2-4; 2 Tim. 2:24-26; Titus 3:2; 1 John 3:17-18)`
  },
  {
    title: 'Lawsuits Between Believers',
    content: `We believe that Christians are prohibited from bringing civil lawsuits against other Christians or the church to resolve personal disputes. We believe the church possesses all the resources necessary to resolve personal disputes between members. We do believe, however, that a Christian may seek compensation for injuries from another Christian’s insurance company as long as the claim is pursued without malice or slander. (1 Cor 6:1-8; Eph. 4:31-32)`
  },
  {
    title: 'Missions',
    content: `We believe that God has given the church a great commission to proclaim the Gospel to all nations so that there might be a great multitude from every nation, tribe, ethnic group, and language group who will believe on the Lord Jesus Christ. As ambassadors of Christ we must use all available means to go to the foreign nations and not wait for them to come to us. (Matt. 28:19-20; Mark 16:15; Luke 24:46-48; John 20:21; Acts 1:8; 2 Cor. 5:20)`
  },
  {
    title: 'Giving',
    content: `We believe that every Christian, as a steward of that portion of God’s wealth entrusted to him, is obligated to financially support his local church. We believe that God has established the tithe as a basis for giving, but that every Christian should also give other offerings sacrificially and cheerfully to the support the church, the relief of those in need, and the spread of the gospel. We believe that a Christian relinquishes all rights to direct the use of his tithe or offering once the gift has been made. (Gen.14:20; Prov. 3:9-10; Acts 4:34-37; 1 Cor. 16:2; 2 Cor. 9:6-7; Gal. 6:6; Eph. 4:28; 1 Tim. 5:17-18; 1 John 3:17)`
  }
];

const StatementOfFaith = () => {
  return (
    <section className="flex items-center justify-center h-auto bg-gray-100 py-40">
      <div className="max-w-screen-lg mx-auto p-8" style={{ maxWidth: '940px' }}>
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Our Church Mission and Values Statement</h1>
        <div className="text-justify">
          {statements.map((statement, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-600">{statement.title}</h2>
              <p className="mb-4 text-gray-600">{statement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatementOfFaith;
