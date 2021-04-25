import React from "react";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({ siteTitle }) => (
  <header className="Header">
    <h1 className="Header__title">
      <span>
        <svg
          className="logo"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path
                d="M216.956,78.428c-0.333-5.515-5.091-9.731-10.585-9.377c-25.117,1.521-50.249,10.768-72.681,26.74
			c-4.499,3.203-5.549,9.447-2.345,13.946c1.95,2.739,5.028,4.2,8.154,4.2c2.006,0,4.032-0.603,5.792-1.855
			c19.652-13.994,40.609-21.755,62.288-23.068C213.092,88.68,217.29,83.941,216.956,78.428z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M125.347,114.989c-3.867-3.942-10.193-4.009-14.137-0.145l-0.325,0.324c-3.925,3.885-3.957,10.217-0.071,14.142
			c1.955,1.976,4.53,2.965,7.106,2.965c2.542,0,5.086-0.964,7.035-2.894l0.251-0.25
			C129.147,125.264,129.212,118.932,125.347,114.989z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M510.385,212.18c-25.948-39.92-49.321-68.294-80.846-82.074c2.479-2.59,4.939-5.145,7.366-7.663
			c11.85-12.301,24.103-25.021,37.04-40.338c2.15-2.547,2.892-5.996,1.976-9.2l-12.504-43.763c-0.988-3.457-3.757-6.118-7.25-6.969
			c-3.495-0.849-7.176,0.241-9.643,2.857C430.045,42.513,416.2,54.217,398.67,69.034c-5.255,4.442-10.969,9.271-17.228,14.657
			c-16.455-34.38-44.787-58.044-81.608-82.065c-2.38-1.553-5.309-2.02-8.054-1.284s-5.047,2.605-6.331,5.141
			c-0.473,0.933-6.145,12.525-6.588,30.685C209.515,8.955,132.033,27.455,73.008,86.48C25.928,133.559,0,196.155,0,262.736
			s25.928,129.177,73.008,176.256C120.087,486.072,182.683,512,249.264,512c66.58,0,129.176-25.928,176.256-73.008
			c32.043-32.043,53.162-69.465,61.076-108.22c6.778-33.197,3.769-66.667-8.643-97.748c16.813-0.767,27.339-5.852,28.566-6.474
			c2.533-1.283,4.4-3.582,5.139-6.323C512.394,217.486,511.932,214.56,510.385,212.18z M411.377,424.849
			C368.075,468.152,310.502,492,249.264,492s-118.812-23.848-162.113-67.15C43.848,381.548,20,323.974,20,262.736
			s23.848-118.812,67.15-162.113c55.903-55.905,129.772-71.663,193.913-41.758c2.547,11.752,7.58,24.885,16.601,38.818
			c-4.52,2.995-9.53,6.101-14.439,9.144c-23.328,14.459-40.184,24.905-37.976,38.762c1.152,7.23,7.07,12.194,17.589,14.755
			c3.626,0.884,10.732,1.149,25.183,1.62c16.378,0.534,40.055,1.306,53.348,3.793c2.303,9.94,3.107,22.12,3.951,34.898
			c0.899,13.614,1.829,27.692,4.656,41.108c1.605,7.61,5.36,25.431,19.535,25.431c11.751,0,19.772-13.059,31.914-32.826
			c3.935-6.406,8.244-13.424,12.811-20.099c13.321,8.594,27.229,14.342,41.161,17.054
			C485.653,294.833,469.404,366.822,411.377,424.849z M473.707,213.124c-3.385,0-6.771-0.235-10.154-0.688
			c-0.161-0.023-0.321-0.044-0.483-0.06c-15.199-2.129-30.359-8.809-45.201-19.94c-4.4-3.299-10.633-2.429-13.959,1.946
			c-7.257,9.539-13.775,20.152-19.526,29.517c-4.131,6.725-9.379,15.268-13.215,20.111c-0.494-1.572-1.048-3.649-1.622-6.373
			c-2.535-12.026-3.417-25.384-4.27-38.301c-1.084-16.409-2.107-31.908-6.313-44.985c-1-3.112-3.459-5.538-6.584-6.498
			c-13.855-4.254-41.497-5.155-63.708-5.879c-8.111-0.265-17.213-0.561-20.377-0.951c5.954-5.104,17.725-12.398,25.466-17.197
			c8.418-5.217,17.121-10.611,23.857-15.735c4.374-3.327,5.243-9.562,1.945-13.959c-11.945-15.928-17.455-30.572-19.601-42.847
			c-0.046-0.571-0.139-1.137-0.28-1.689c-1.484-9.722-0.869-17.867,0.245-23.857c33.146,22.751,56.238,44.855,68.243,77.973
			c1.126,3.106,3.714,5.456,6.915,6.277c3.199,0.825,6.6,0.01,9.084-2.171c10.378-9.111,19.428-16.761,27.412-23.51
			c13.624-11.516,25.081-21.2,37.323-33.158l6.311,22.089c-11.28,13.075-22.161,24.371-32.716,35.328
			c-5.9,6.125-12.001,12.458-18.13,19.055c-2.387,2.569-3.254,6.201-2.284,9.572c0.97,3.37,3.635,5.986,7.022,6.894
			c27.375,7.336,48.324,25.519,77.152,67.92C482.769,212.647,478.544,213.124,473.707,213.124z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M366.124,404.002c-3.885-3.924-10.218-3.956-14.142-0.071l-0.289,0.287c-3.925,3.885-3.957,10.217-0.071,14.142
			c1.955,1.976,4.53,2.965,7.107,2.965c2.542,0,5.086-0.964,7.035-2.894l0.289-0.287
			C369.978,414.259,370.01,407.927,366.124,404.002z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M345.591,423.575c-3.204-4.497-9.446-5.55-13.947-2.345c-19.651,13.994-40.608,21.754-62.287,23.068
			c-5.513,0.334-9.711,5.072-9.377,10.586c0.321,5.307,4.726,9.395,9.972,9.395c0.204,0,0.408-0.006,0.614-0.018
			c25.117-1.521,50.249-10.768,72.68-26.74C347.745,434.318,348.795,428.074,345.591,423.575z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </span>
      {siteTitle}
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
