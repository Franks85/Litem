import React from 'react'
import frontImage from '../../../UI/images/lithome.jpg'
import sectionImage from '../../../UI/images/sky.jpg'
import styled from 'styled-components'

const ActionBox = styled.div`
  position: relative;
  overflow: hidden;
  height: 500px;
  padding: 30px;
  opacity: 0.9;
  background-image: url(${frontImage});
`

const InterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 350px;
  padding: 30px;
  opacity: 0.9;
  background-image: url(${sectionImage});
`

const landing = () => {
  return (
    <div>
      <ActionBox>
        <h1 className="header center teal-text text-lighten-2">
          LITEM SERVICE
        </h1>
        <div className="row center">
          <h5 className="header col s12 light">
            A simple app to search for your lost items
          </h5>
        </div>
        <div className="row center">
          <a
            href="/service"
            className="btn-large waves-effect waves-light teal lighten-1"
            data-testid='action-btn'
          >
            Get Started
          </a>
        </div>
      </ActionBox>

      <div className="section" id="sec1">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons">flash_on</i>
              </h2>
              <h5 className="center">Speeds up development</h5>

              <p className="light">
                We did most of the heavy lifting for you to provide a default
                stylings that incorporate our custom components. Additionally,
                we refined animations and transitions to provide a smoother
                experience for developers.
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons">group</i>
              </h2>
              <h5 className="center">User Experience Focused</h5>

              <p className="light">
                By utilizing elements and principles of Material Design, we were
                able to create a framework that incorporates components and
                animations that provide more feedback to users.
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text">
                <i className="material-icons">settings</i>
              </h2>
              <h5 className="center">Easy to work with</h5>

              <p className="light">
                We have provided detailed documentation as well as specific code
                examples to help new users get started. We are also always open
                to feedback and can answer any questions a user may have about
                Materialize.
              </p>
            </div>
          </div>
        </div>
      </div>

      <InterSection>
        <div className="row center">
          <h5 className="header col s12 light white-text">
            Describe the items you have lost and we will contact you as soon as
            possible
          </h5>
        </div>
      </InterSection>

      <div className="section" id="sec2">
        <div className="row">
          <div className="col s12 center">
            <h3>
              <i className="mdi-content-send brown-text" />
            </h3>
            <h4>Contact Us</h4>
            <p className="left-align light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque id nunc nec volutpat. Etiam pellentesque tristique
              arcu, non consequat magna fermentum ac. Cras ut ultricies eros.
              Maecenas eros justo, ullamcorper a sapien id, viverra ultrices
              eros. Morbi sem neque, posuere et pretium eget, bibendum
              sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis
              nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa
              odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget
              dignissim mauris, non tristique erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default landing
