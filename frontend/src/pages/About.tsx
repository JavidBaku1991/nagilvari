import React from 'react';
import '../css/About.css';
import hero1Img from '../images/hero.jpeg';
import about from '../images/pottery.png';

const About: React.FC = () => (
  <div className="about-page page" style={{
    minHeight: 'calc(100vh - 64px)', // Subtract navbar height
    padding: '80px 20px',
    background: 'white',
    marginBottom: 0,
    backgroundImage: `url(${about})`,
    backgroundSize: 'cover'
  }}>
    <div className="container">
      <h2 className="about-title text-center mb-5" style={{ color: '#8B4513' }}>About Nagilvari</h2>
      <div
  className="about-content card p-4 mx-auto mt-4"
  style={{
    maxWidth: '1000px',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#8B4513',
    textShadow: '2px 2px 4px rgba(203, 186, 186, 0.3)',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  }}
>

        <p >
          <strong >Nagilvari </strong>
          
           - sənətkarlarla sənətsevərləri bir araya gətirən unikal bir platformadır. Əl işi zinət əşyalarından tutmuş rəsm əsərlərinə, xalçalardan kiçik heykəltəraşlıq nümunələrinə qədər bir çox sənət növünü bu məkanda təqdim edirik. Məqsədimiz həm sənətkarlara geniş auditoriyaya çıxış imkanı yaratmaq, həm də vətəndaşlara orijinal və dəyərli sənət əsərləri təqdim etməkdir.
        </p>
        <p>
        Hər bir əl işi bir hekayə daşıyır və biz bu hekayələrin itmədən gələcək nəsillərə ötürülməsi üçün körpü rolunu oynayırıq. Nağılvari, həm yaradıcı fərdləri, həm də sənətə marağı olan alıcıları eyni dəyər ətrafında birləşdirir.
        </p>
        <p>
        İnnovativ texnologiya və ənənəvi sənət birləşməsindən doğan bu layihə ilə biz mədəniyyətimizin qorunması və yayılması üçün yeni bir yol açırıq. İnanırıq ki, sənət yalnız sərgilərdə deyil, gündəlik həyatımızda da öz yerini tapmalıdır. Nağılvari — hər evə sənət, hər sənətkara dəstək!

</p>
      </div>
    </div>
  </div>
);

export default About; 


