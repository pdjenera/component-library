import styled from 'styled-components';

export const PageContainer = styled.div`
    margin: 0 auto;
    padding: 48px 20px;
    max-width: 600px;
    color: #333;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  h2 {
    display: inline-block;
    vertical-align: top;
    margin: 0 0 4px;
    font-weight: 700;
    font-size: 32px;
    line-height: 1;
  }
  
  p {
    margin: 1em 0;
  }
  
  a {
    color: #1ea7fd;
    text-decoration: none;
  }
  
  ul {
    margin: 1em 0;
    padding-left: 30px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  .tip {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
    border-radius: 1em;
    background: #e7fdd8;
    padding: 4px 12px;
    color: #66bf3c;
    font-weight: 700;
    font-size: 11px;
    line-height: 12px;
  }
  
  .tip-wrapper {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 13px;
    line-height: 20px;
  }
  
  .tip-wrapper svg {
    display: inline-block;
    vertical-align: top;
    margin-top: 3px;
    margin-right: 4px;
    width: 12px;
    height: 12px;
  }
  
  .tip-wrapper svg path {
    fill: #1ea7fd;
  }
`; 