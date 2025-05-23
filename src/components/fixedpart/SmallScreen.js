// components/BigScreenLayout.tsx
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import myImage from './../../assets/image.png';
import { Container } from 'lucide-react';

 const SmallScreenLayout = () => (
  <ContainerS>

        <Left>
            <Title>El-Mahdi Safouane</Title>


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
        </Left>    

        <Image src={myImage} alt="myImage">

        </Image>

  </ContainerS>
);

const ContainerS = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
`

const Left = styled.div`
    display : flex;
    flex-direction : column;
    gap : 2rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #222;

  @media (max-width: 600px) {
    font-size: 1rem;
  
  }
     @media (max-width: 350px) {
    font-size: .7rem;

    }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
@media (max-width: 350px) {
    width: 80px;
    height: 80px;
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

    @media (max-width: 600px) {
        gap: 1.3rem;

        svg {
            color: #000;
            font-size: 1.2rem;
        }
    }
`;

export default SmallScreenLayout;