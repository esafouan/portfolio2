// components/BigScreenLayout.tsx
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import myImage from './../../assets/image.png';

 const BigScreenLayout = () => (
  <>
        <Title>El-Mahdi Safouane</Title>

        <Sign viewBox="-50 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 7.00395C29.9227 6.67154 57.7403 2.48616 85.7581 2.13811C93.9379 2.0365 102.164 1.51045 110.142 3.50492C114.251 4.53213 113.245 6.88364 110.798 10.175C105.504 17.2946 95.2859 19.5732 86.9609 20.344C71.1719 21.806 54.9715 20.7814 39.1226 20.7814C33.5224 20.7814 27.9891 20.8789 22.4475 21.7655C21.0803 21.9842 20.7088 22.4625 22.4475 23.187C31.6696 27.0295 42.9773 27.4595 52.736 28.2169C64.6486 29.1413 76.6034 29.4334 88.5464 29.5837C91.4876 29.6207 97.6574 28.8991 100.957 29.857C106.129 31.3584 90.64 32.9479 85.4848 34.5042C75.0199 37.6634 64.4202 37.044 53.8295 39.2607C51.1721 39.8169 68.5986 44.5454 70.6686 45.876C72.4767 47.0384 66.528 50.7975 65.748 51.726C63.5311 54.3652 66.8976 55.6372 67.9349 57.1932"
                pathLength="1"
                strokeDasharray="1px 1px"
                strokeDashoffset="0px"
            />
        </Sign>

        <Image src={myImage} alt="myImage">

        </Image>

        <Sign className='rev-shape' viewBox="-50 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 7.00395C29.9227 6.67154 57.7403 2.48616 85.7581 2.13811C93.9379 2.0365 102.164 1.51045 110.142 3.50492C114.251 4.53213 113.245 6.88364 110.798 10.175C105.504 17.2946 95.2859 19.5732 86.9609 20.344C71.1719 21.806 54.9715 20.7814 39.1226 20.7814C33.5224 20.7814 27.9891 20.8789 22.4475 21.7655C21.0803 21.9842 20.7088 22.4625 22.4475 23.187C31.6696 27.0295 42.9773 27.4595 52.736 28.2169C64.6486 29.1413 76.6034 29.4334 88.5464 29.5837C91.4876 29.6207 97.6574 28.8991 100.957 29.857C106.129 31.3584 90.64 32.9479 85.4848 34.5042C75.0199 37.6634 64.4202 37.044 53.8295 39.2607C51.1721 39.8169 68.5986 44.5454 70.6686 45.876C72.4767 47.0384 66.528 50.7975 65.748 51.726C63.5311 54.3652 66.8976 55.6372 67.9349 57.1932"
                pathLength="1"
                strokeDasharray="1px 1px"
                strokeDashoffset="0px"
            />
        </Sign>

        <Links>
            <a href="https://github.com/esafouan" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} color="black" size="2x" />
            </a>

            <a href="https://linkedin.com/in/el-mahdi-safouane-88b554273/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="black" size="2x" />
            </a>

            <a href="mailto:elmahdisafouane@.com">
                <FontAwesomeIcon icon={faEnvelope} color="black" size="2x" />
            </a>
        </Links>
  </>
);


const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #222;
`;

const Sign = styled.svg`
  width: 280px;
  max-width: 100%;
  stroke: #222;
  stroke-width: 3;
  stroke-linecap: round;
  transform: translateX(20px);
  opacity: 0.85;

`;

const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  a {
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      transform: scale(1.2);
      color: #555;
    }
  }

  svg {
    color: #000;
  }
`;

export default BigScreenLayout;