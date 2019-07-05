import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Endormi.
        </BigTitle>
        <Subtitle>Full Stack Developer, Specializing in Web Development.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="django-react-app"
            link="https://github.com/endormi/django-react-app"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            API that communicates with the frontend connected to nginx-proxy with docker
          </ProjectCard>
          <ProjectCard
            title="devisle / advanced-react-cli"
            link="https://github.com/devisle/advanced-react-cli"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            NPM package which aims to provide a better way to install packages for your react application through an
            intuitive CLI
          </ProjectCard>
          <ProjectCard
            title="django-listAPI"
            link="https://github.com/endormi/django-listAPI"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            API that manages serialization and deserialization
          </ProjectCard>
          <ProjectCard
            title="vscode-2077-theme"
            link="https://github.com/endormi/vscode-2077-theme"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Cyberpunk 2077 inspired theme for vscode
          </ProjectCard>
          <ProjectCard
            title="GitFinder"
            link="https://github.com/endormi/GitFinder"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Find and fetch user info using GitHub's API
          </ProjectCard>
          <ProjectCard
            title="tennis-game"
            link="https://github.com/endormi/tennis-game"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Tennis game (original pong game) made with JS
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Experience</Title>
        <AboutDesc>
          I'm passionate about all kinds of new web technologies. I have experience with <b>Django</b>, <b>Python</b>,{' '}
          <b>JavaScript</b>, <b>CI/CD</b> (Travis-CI & CircleCI), <b>API's</b>, <b>Databases</b> (MongoDB & SQLite3) and
          i'm constantly learning more and bettering my coding skills.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch with me</Title>
          <ContactText>
            Send me an <a href="mailto:contactendormi@gmail.com">email</a> or find me on other platforms:{' '}
            <a href="https://github.com/endormi">GitHub</a>, <a href="https://www.linkedin.com/in/ernosalo">LinkedIn</a>
            , <a href="https://codesandbox.io/u/endormi">CodeSandbox</a> &{' '}
            <a href="https://twitter.com/_endormi">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          © {new Date().getFullYear()} <a href="https://github.com/endormi">Endormi</a>. This website was built with
          GatsbyJS
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
