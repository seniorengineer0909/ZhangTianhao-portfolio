import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styles from '../styles/SideDetails.module.css';

const SideDetails = () => {
  const age = () => {
    const dob = new Date('07/05/1997');
    const month_diff = Date.now() - dob.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
  };

  return (
    <div className={styles.details}>
      <img
        src="https://flagcdn.com/w320/cn.png"
        alt="China Flag"
        style={{ width: '60px', height: '34px', marginLeft: '153px' }}
      />
      <ul>
        <li>
          <h5>Residence:</h5>
          <span>China</span>
        </li>
        <li>
          <h5>City:</h5>
          <span>Shenyang</span>
        </li>
        <li>
          <h5>Age:</h5>
          <span>{age()}</span>
        </li>
      </ul>

      <div style={{paddingTop: "10px"}} className={styles.hobbies}>
        <ul>
          <li>
            <FaAngleDown /> <p style={{fontSize: "15px"}}>Web</p>
          </li>
          <li>
            <FaAngleDown /> <p style={{fontSize: "15px"}}>Mobile</p>
          </li>
          <li>
            <FaAngleDown /> <p style={{fontSize: "15px"}}>Desktop</p>
          </li>
          <li>
            <FaAngleDown /> <p style={{fontSize: "15px"}}>AI</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDetails;
