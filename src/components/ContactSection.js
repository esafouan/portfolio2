import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContentWrapper>
        {/* Your contact content will go here */}
      </ContentWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
