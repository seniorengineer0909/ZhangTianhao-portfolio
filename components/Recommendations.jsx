import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import styles from '../styles/Recommendations.module.css';

import SwiperWrap from './SwiperWrap';

import { fadeInUp } from '../utils/motions';

const RecommendationCard = ({ card }) => {
  return (
    <div className={styles.recommendation_card}>
      <h5>{card.name}</h5>
      <small>{card.title}</small>
      <div className={styles.image_wrap}>
        {/* <Image
          className={styles.profile_image}
          src={card.image}
          alt="profile picture"
          width={70}
          height={70}
        /> */}
      </div>
      <p>{card.description}</p>
    </div>
  );
};

const Recommendations = () => {
  const recommendations = [
    {
      name: 'Senior Software Engineer',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQENQAcnn1NuXg/profile-displayphoto-shrink_100_100/0/1645732120285?e=1661990400&v=beta&t=bLtJx5mYo482KI9b9Ki1Pw5Zqo9cnfdEd97USSCI8Ko',
      title:
        'Ingram Micro | May 2023 - Present',
      description: `•	Constructed a vendor command center, driving $30 million in measurable outcomes.
•	Orchestrated regular code review sessions and knowledge-sharing workshops, resulting in a 40% improvement in team members' coding standards and a 50% reduction in onboarding time for new developers.`,
    },
    {
      name: 'Senior Frontend Engineer',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQE7baHB89RI6A/profile-displayphoto-shrink_100_100/0/1644038619161?e=1661990400&v=beta&t=qNZVtxRdDpWz8wTh8SoGjMYoarVJWhQew2Pn2E4gsBo',
      title: 'Dapper Labs | May 2022 - Apr 2023',
      description: `•	Architected and implemented innovative NFT marketplace solutions for industry-leading platforms Genius and NBATopShot, resulting in a 3x boost in revenue and a 40% increase in active user base.
•	Championed the creation of modular design system with 30+ reusable components, leading to a 25% increase in design consistency and a 20% boost in development efficiency.`,
    },
    {
      name: 'Senior Frontend Engineer',
      image:
        'https://media-exp1.licdn.com/dms/image/C5603AQHUASERmYe-WA/profile-displayphoto-shrink_100_100/0/1645558822023?e=1661990400&v=beta&t=spJsLnK25yLoqJ0EubnlR2y4WJdgAAx48b8bmDL6azQ',
      title:
        'Binance | Mar 2021 - Aug 2022',
      description: `•	Established the implementation of automated data refresh processes, decreasing data staleness by 50% and enabling the team to react swiftly to market shifts, leading to a 25% increase in market share.
•	Executed the deployment of unit and end-to-end tests for a robust codebase, which led to a 50% decrease in post-release.`,
    },
  ];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.recommendations}
    >
      <h3>Experience</h3>
      <SwiperWrap>
        {recommendations.map((card, index) => (
          <SwiperSlide key={`card-${index}`}>
            <RecommendationCard key={`card-${index}`} card={card} />
          </SwiperSlide>
        ))}
      </SwiperWrap>
    </motion.div>
  );
};

export default Recommendations;
