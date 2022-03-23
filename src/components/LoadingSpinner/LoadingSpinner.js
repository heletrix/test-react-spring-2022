import { LogoSpinnerWrapper, LogoSpinner, Spinner } from './styled';

const spinnerColors = {
  dark: {
    secondaryColor: 'rgba(0,0,0,0.4)',
    mainColor: 'rgba(0,0,0,1)'
  },
  light: {
    secondaryColor: 'rgba(255,255,255,0.4)',
    mainColor: 'rgba(255,255,255,1)'
  }
};

const LoadingSpinner = ({ color = 'dark', type, text = '' }) =>
  type === 'logo' ? (
    <LogoSpinnerWrapper>
      <LogoSpinner>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16ZM25.7653 16.0191C25.7653 21.4227 21.3848 25.8031 15.9812 25.8031C10.5777 25.8031 6.19719 21.4227 6.19719 16.0191C6.19719 10.6155 10.5777 6.23506 15.9812 6.23506C21.3848 6.23506 25.7653 10.6155 25.7653 16.0191Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="5.08451"
              y1="4.9708"
              x2="26.2697"
              y2="27.8804"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A42D7" />
              <stop offset="1" stopColor="#EC0352" />
            </linearGradient>
          </defs>
        </svg>
      </LogoSpinner>
      {Boolean(text) && <span>{text}</span>}
    </LogoSpinnerWrapper>
  ) : (
    <Spinner
      secondaryColor={
        spinnerColors[color]?.secondaryColor ||
        spinnerColors['dark'].secondaryColor
      }
      mainColor={
        spinnerColors[color]?.mainColor || spinnerColors['dark'].secondaryColor
      }
    />
  );

export default LoadingSpinner;
