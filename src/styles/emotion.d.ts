import '@emotion/react'
    
declare module '@emotion/react' {
  export interface Theme {
    color: {
      main: string;
      highlight: string;
      contrast: string;
      sub: string;
      subHover: string;
    };
    fontSize: {
      small: string;
      normal: string;
      large: string;
      xlarge: string;
      x2large: string;
    };
  }
}