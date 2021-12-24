import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Full-Stack developer with industry experience building websites and web applications. I specialize in
        JavaScript and have professional experience working with React/Redux.
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
