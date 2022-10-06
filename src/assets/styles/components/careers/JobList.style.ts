import styled from "styled-components";
import { theme } from "constants/variables";
import breakpoints from "constants/breakpoints";

const JobListStyle = styled.div`
  .careers-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .careers-block {
      padding: 64px 160px 64px 0;

      h2 {
        padding-bottom: 24px;
        color: ${theme.secondaryColor};
      }
    }
  }
}

.careers-list-container {
  background-color: ${theme.darkColor};
  padding: 160px 0 160px 135px;
  width: calc(100vw - 50%);
  min-height: 956px;
  display: flex;
  align-items: center;

  .careers-list {
    margin: 0;
    width: 100%;
    max-width: 690px;
    padding-right: 16px;
  }
}

.careers-item {
  color: ${theme.lightColor};
  border-bottom: 1px solid;
  cursor: pointer;

  .header {
    padding-bottom: 24px;
    padding-top: 24px;
    display: flex;
    span {
      display: inline-block;
      &:first-child {
        padding-top: 4px;
      }
      &:last-child {
        padding-left: 32px;
        font-family: ${theme.secondaryFonts};
      }
      
    }
  }
  
  .careers-body {
    transition: max-height 1s;
    overflow: hidden;
    max-height: 0;

    p {
      height: 80px;
      display: -webkit-inline-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    a {
      background-color: ${theme.lightColor};
      color: ${theme.secondaryColor};
      border-radius: 4px;
      padding: 12px 16px;
      display: inline-block;
      margin-top: 24px;
      &:hover {
        background-color: ${theme.secondaryColor};
        color: ${theme.lightColor};
      }
    }
  }

  &:hover {
    
    opacity: 1;
    visibility: visible;
    padding-bottom: 24px;
    .careers-body {
      max-height: 163px;

      
    }
  }
}

@media screen and (max-width: ${breakpoints.screenXXL}) {
  .careers-list-container {
    width: 50vw;
    margin-right: -120px;
    padding-right: 120px;
    .careers-list {
      padding-right: 0;
    }
  }
}

@media screen and (max-width: ${breakpoints.screenXL}) {
  .careers-list-container {
    margin-right: -40px;
    padding-right: 40px;
    .careers-list {
      padding-right: 0;
    }
  }
}

@media screen and (max-width: ${breakpoints.screenMD}) {
  .careers-container {
    grid-template-columns: 1fr;

    .careers-block {
      padding: 64px 0 16px;

      h2 {
        padding-bottom: 16px;
      }
    }
  }

  .careers-list-container {
    width: calc(100vw + 16px);
    padding: 64px 56px 64px 40px;
    margin-left: -40px;
    min-height: unset;

    .careers-list {
      max-width: 100%;
      padding-bottom: 0;
      padding-right: 0;
    }
  }
}

@media screen and (max-width: ${breakpoints.screenSM}) {
  .careers-list-container {
    padding: 64px 16px;
    margin-left: -16px;
    width: 100vw;
  }
}

@media screen and (max-width: ${breakpoints.screenS}) {
  .careers-item {
    &:hover {
      .careers-body {
        p {
          height: 75px;
        }
      }
    }
  }
`;

export default JobListStyle;
