import React from 'react';
import './Profiles.css';

const Profiles = () => (
  <div className="profiles-page-container">
    <div className="profile-page-inner-container">
      <a
        className="profiles-page-single-profile"
        href="https://codechef.com/users/vivek1401"
        target="_blank"
        rel="noreferrer noopener"

      >
        <div
          className="profile-page-single-profile-image"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg")',
          }}
        />
        <div className="profile-page-single-profile-description">
          <div className="profile-page-single-profile-description-title">CodeChef</div>
          <div className="profile-page-single-profile-description-subtitle-1">
            vivek1401
          </div>
          <div className="profile-page-single-profile-description-subtitle-2">
            max: 2117 (5 star)
          </div>
        </div>
      </a>

      <a
        className="profiles-page-single-profile"
        href="https://github.com/vivek21-coder"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div
          className="profile-page-single-profile-image"
          style={{
            backgroundImage: 'url("https://image.flaticon.com/icons/png/512/25/25231.png")',
          }}
        />
        <div className="profile-page-single-profile-description">
          <div className="profile-page-single-profile-description-title">Github</div>
          <div className="profile-page-single-profile-description-subtitle-1">
            vivek21-coder
          </div>
          <div className="profile-page-single-profile-description-subtitle-2" />
        </div>
      </a>

      <a
        className="profiles-page-single-profile"
        href="https://codeforces.com/profile/vivek1401"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div
          className="profile-page-single-profile-image"
          style={{
            backgroundImage: 'url("https://1.bp.blogspot.com/-pBimI1ZhYAA/Wnde0nmCz8I/AAAAAAAABPI/5LZ2y9tBOZIV-pm9KNbyNy3WZJkGS54WgCPcBGAYYCw/s1600/codeforce.png")',
          }}
        />
        <div className="profile-page-single-profile-description">
          <div className="profile-page-single-profile-description-title">Codeforces</div>
          <div className="profile-page-single-profile-description-subtitle-1">
            vivek1401
          </div>
          <div className="profile-page-single-profile-description-subtitle-2">
            max: 1759 (expert)
          </div>
        </div>
      </a>
      <a
        className="profiles-page-single-profile"
        href="https://leetcode.com/vivek1401/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div
          className="profile-page-single-profile-image"
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png")',
          }}
        />
        <div className="profile-page-single-profile-description">
          <div className="profile-page-single-profile-description-title">CodeChef</div>
          <div className="profile-page-single-profile-description-subtitle-1">
            vivek1401
          </div>
          <div className="profile-page-single-profile-description-subtitle-2">
            max: 2102 (5 star)
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default Profiles;
