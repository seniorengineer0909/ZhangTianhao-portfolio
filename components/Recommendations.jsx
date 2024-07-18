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
      name: 'Backend Developer',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQENQAcnn1NuXg/profile-displayphoto-shrink_100_100/0/1645732120285?e=1661990400&v=beta&t=bLtJx5mYo482KI9b9Ki1Pw5Zqo9cnfdEd97USSCI8Ko',
      title:
        'Hopper | Aug 2022 - May 2024 (1 year, 9 months)',
      description: `Engineered high-performance RESTful APIs with Node.js and Express, elevating flight booking experiences.
Crafted robust data processing pipelines utilizing Kafka and Spark, boosting real-time flight data analytics.
Developed scalable microservices architecture leveraging Docker and Kubernetes.
Fortified API security and ensured GDPR compliance using OAuth 2.0 authentication protocols.
Orchestrated CI/CD workflows with Jenkins and AWS, streamlining automated deployment processes.`,
    },
    {
      name: 'Backend Developer',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQE7baHB89RI6A/profile-displayphoto-shrink_100_100/0/1644038619161?e=1661990400&v=beta&t=qNZVtxRdDpWz8wTh8SoGjMYoarVJWhQew2Pn2E4gsBo',
      title: 'Tyk Technologies | Jul 2019 - Nov 2021 (2 years, 3 months)',
      description: `Tyk Technologies is a company specializing in API management and service orchestration solutions.
Expertly developed and maintained high-performance RESTful APIs leveraging Node.js and Go.
Skillfully managed API lifecycle with Tyk API Gateway for enhanced security and control.
Optimized MySQL and MongoDB database operations, designing efficient schemas for scalability.
Implemented secure authentication and authorization protocols using OAuth 2.0 and JWT.`,
    },
    {
      name: 'Frontend Developer',
      image:
        'https://media-exp1.licdn.com/dms/image/C5603AQHUASERmYe-WA/profile-displayphoto-shrink_100_100/0/1645558822023?e=1661990400&v=beta&t=spJsLnK25yLoqJ0EubnlR2y4WJdgAAx48b8bmDL6azQ',
      title:
        'Outliant | Sep 2018 - Aug 2019 (11 months, 2 days)',
      description: `Spearheaded frontend development at Outliant, a global, fully remote company specializing in design, development, and digital marketing services.
Championed User Experience ՄUXՅ and User Interface ՄUIՅ design, ensuring intuitive and aesthetically pleasing interfaces.
Directed the discovery phase for medium to large-scale projects, delivering comprehensive high-level design strategies.`,
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
