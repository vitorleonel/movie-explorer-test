import React from "react";

import { Container } from "./styles";

const Header = (): React.ReactNode => {
  return (
    <Container>
      <a href="" id="logo">
        <svg
          viewBox="0 0 170 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7891 5.48828C18.3047 5.48828 19.4609 5.875 20.2578 6.64844C21.0625 7.42188 21.4648 8.66016 21.4648 10.3633V19H16.8828V11.7812C16.8828 10.7734 16.7461 10.0742 16.4727 9.68359C16.207 9.28516 15.8086 9.08594 15.2773 9.08594C14.5352 9.08594 14.0195 9.41016 13.7305 10.0586C13.4492 10.707 13.3086 11.625 13.3086 12.8125V19H8.71484V11.7812C8.71484 11.1406 8.65625 10.625 8.53906 10.2344C8.42969 9.83594 8.26172 9.54688 8.03516 9.36719C7.80859 9.17969 7.52344 9.08594 7.17969 9.08594C6.65625 9.08594 6.24609 9.24609 5.94922 9.56641C5.66016 9.87891 5.45703 10.3398 5.33984 10.9492C5.22266 11.5586 5.16406 12.3047 5.16406 13.1875V19H0.582031V5.72266H4.03906L4.70703 7.36328H4.83594C5.07031 7.00391 5.37109 6.68359 5.73828 6.40234C6.11328 6.12109 6.55469 5.89844 7.0625 5.73438C7.57812 5.57031 8.16406 5.48828 8.82031 5.48828C9.79688 5.48828 10.6016 5.65234 11.2344 5.98047C11.8672 6.30859 12.3828 6.76172 12.7812 7.33984H12.9219C13.3438 6.74609 13.8867 6.28906 14.5508 5.96875C15.2148 5.64844 15.9609 5.48828 16.7891 5.48828ZM37.2617 12.332C37.2617 13.4414 37.1094 14.4258 36.8047 15.2852C36.5 16.1445 36.0586 16.8672 35.4805 17.4531C34.9023 18.0391 34.2031 18.4844 33.3828 18.7891C32.5625 19.0859 31.6367 19.2344 30.6055 19.2344C29.6445 19.2344 28.7617 19.0859 27.957 18.7891C27.1602 18.4844 26.4648 18.0391 25.8711 17.4531C25.2773 16.8672 24.8164 16.1445 24.4883 15.2852C24.168 14.4258 24.0078 13.4414 24.0078 12.332C24.0078 10.8633 24.2734 9.62109 24.8047 8.60547C25.3438 7.58984 26.1094 6.81641 27.1016 6.28516C28.1016 5.75391 29.293 5.48828 30.6758 5.48828C31.9492 5.48828 33.082 5.75391 34.0742 6.28516C35.0664 6.81641 35.8438 7.58984 36.4062 8.60547C36.9766 9.62109 37.2617 10.8633 37.2617 12.332ZM28.6602 12.332C28.6602 13.0898 28.7266 13.7305 28.8594 14.2539C28.9922 14.7695 29.2031 15.1641 29.4922 15.4375C29.7891 15.7031 30.1758 15.8359 30.6523 15.8359C31.1289 15.8359 31.5078 15.7031 31.7891 15.4375C32.0703 15.1641 32.2734 14.7695 32.3984 14.2539C32.5312 13.7305 32.5977 13.0898 32.5977 12.332C32.5977 11.5742 32.5312 10.9414 32.3984 10.4336C32.2734 9.92578 32.0664 9.54297 31.7773 9.28516C31.4961 9.02734 31.1133 8.89844 30.6289 8.89844C29.9336 8.89844 29.4297 9.1875 29.1172 9.76562C28.8125 10.3438 28.6602 11.1992 28.6602 12.332ZM43.3672 19L38.3047 5.72266H43.0859L45.3359 13.5742C45.3594 13.6445 45.3984 13.8242 45.4531 14.1133C45.5156 14.4023 45.5469 14.6719 45.5469 14.9219H45.6289C45.6289 14.6562 45.6562 14.4023 45.7109 14.1602C45.7656 13.918 45.8086 13.7305 45.8398 13.5977L48.1953 5.72266H52.9648L47.9023 19H43.3672ZM59.1641 5.72266V19H54.582V5.72266H59.1641ZM56.8906 0.378906C57.5469 0.378906 58.1172 0.515625 58.6016 0.789062C59.0938 1.0625 59.3398 1.60547 59.3398 2.41797C59.3398 3.20703 59.0938 3.74219 58.6016 4.02344C58.1172 4.29688 57.5469 4.43359 56.8906 4.43359C56.2188 4.43359 55.6445 4.29688 55.168 4.02344C54.6992 3.74219 54.4648 3.20703 54.4648 2.41797C54.4648 1.60547 54.6992 1.0625 55.168 0.789062C55.6445 0.515625 56.2188 0.378906 56.8906 0.378906ZM68.3398 5.48828C69.6289 5.48828 70.7422 5.71484 71.6797 6.16797C72.6172 6.61328 73.3398 7.28516 73.8477 8.18359C74.3555 9.08203 74.6094 10.207 74.6094 11.5586V13.5977H66.418C66.457 14.293 66.7148 14.8633 67.1914 15.3086C67.6758 15.7539 68.3867 15.9766 69.3242 15.9766C70.1523 15.9766 70.9102 15.8945 71.5977 15.7305C72.293 15.5664 73.0078 15.3125 73.7422 14.9688V18.2617C73.1016 18.5977 72.4023 18.8438 71.6445 19C70.8867 19.1562 69.9297 19.2344 68.7734 19.2344C67.4375 19.2344 66.2422 18.9961 65.1875 18.5195C64.1328 18.043 63.3008 17.3047 62.6914 16.3047C62.0898 15.3047 61.7891 14.0195 61.7891 12.4492C61.7891 10.8555 62.0625 9.54688 62.6094 8.52344C63.1562 7.49219 63.9219 6.73047 64.9062 6.23828C65.8906 5.73828 67.0352 5.48828 68.3398 5.48828ZM68.5039 8.60547C67.9648 8.60547 67.5117 8.77734 67.1445 9.12109C66.7852 9.45703 66.5742 9.98828 66.5117 10.7148H70.4492C70.4414 10.3242 70.3633 9.96875 70.2148 9.64844C70.0664 9.32812 69.8477 9.07422 69.5586 8.88672C69.2773 8.69922 68.9258 8.60547 68.5039 8.60547Z"
            fill="#7DD3FC"
          />
          <path
            d="M82.6133 5.92188C83.707 5.92188 84.6445 6.16406 85.4258 6.64844C86.207 7.13281 86.8047 7.8125 87.2188 8.6875C87.6328 9.55469 87.8398 10.5703 87.8398 11.7344V12.9414H78.9688C78.9922 14.4492 79.3672 15.5977 80.0938 16.3867C80.8203 17.1758 81.8438 17.5703 83.1641 17.5703C83.9766 17.5703 84.6953 17.4961 85.3203 17.3477C85.9453 17.1992 86.5938 16.9805 87.2656 16.6914V18.4023C86.6172 18.6914 85.9727 18.9023 85.332 19.0352C84.6992 19.168 83.9492 19.2344 83.082 19.2344C81.8477 19.2344 80.7695 18.9844 79.8477 18.4844C78.9336 17.9766 78.2227 17.2344 77.7148 16.2578C77.207 15.2812 76.9531 14.0859 76.9531 12.6719C76.9531 11.2891 77.1836 10.0938 77.6445 9.08594C78.1133 8.07031 78.7695 7.28906 79.6133 6.74219C80.4648 6.19531 81.4648 5.92188 82.6133 5.92188ZM82.5898 7.51562C81.5508 7.51562 80.7227 7.85547 80.1055 8.53516C79.4883 9.21484 79.1211 10.1641 79.0039 11.3828H85.8008C85.793 10.6172 85.6719 9.94531 85.4375 9.36719C85.2109 8.78125 84.8633 8.32812 84.3945 8.00781C83.9258 7.67969 83.3242 7.51562 82.5898 7.51562ZM94.2031 12.4258L89.7617 6.15625H91.9883L95.375 11.1016L98.75 6.15625H100.953L96.5117 12.4258L101.199 19H98.9727L95.375 13.7617L91.7539 19H89.5508L94.2031 12.4258ZM109.742 5.92188C111.344 5.92188 112.621 6.47266 113.574 7.57422C114.527 8.67578 115.004 10.332 115.004 12.543C115.004 14.0039 114.785 15.2305 114.348 16.2227C113.91 17.2148 113.293 17.9648 112.496 18.4727C111.707 18.9805 110.773 19.2344 109.695 19.2344C109.016 19.2344 108.418 19.1445 107.902 18.9648C107.387 18.7852 106.945 18.543 106.578 18.2383C106.211 17.9336 105.906 17.6016 105.664 17.2422H105.523C105.547 17.5469 105.574 17.9141 105.605 18.3438C105.645 18.7734 105.664 19.1484 105.664 19.4688V24.7422H103.707V6.15625H105.312L105.57 8.05469H105.664C105.914 7.66406 106.219 7.30859 106.578 6.98828C106.938 6.66016 107.375 6.40234 107.891 6.21484C108.414 6.01953 109.031 5.92188 109.742 5.92188ZM109.402 7.5625C108.512 7.5625 107.793 7.73438 107.246 8.07812C106.707 8.42188 106.312 8.9375 106.062 9.625C105.812 10.3047 105.68 11.1602 105.664 12.1914V12.5664C105.664 13.6523 105.781 14.5703 106.016 15.3203C106.258 16.0703 106.652 16.6406 107.199 17.0312C107.754 17.4219 108.496 17.6172 109.426 17.6172C110.223 17.6172 110.887 17.4023 111.418 16.9727C111.949 16.543 112.344 15.9453 112.602 15.1797C112.867 14.4062 113 13.5195 113 12.5195C113 11.0039 112.703 9.80078 112.109 8.91016C111.523 8.01172 110.621 7.5625 109.402 7.5625ZM120.359 19H118.402V0.765625H120.359V19ZM135.547 12.5547C135.547 13.6094 135.41 14.5508 135.137 15.3789C134.863 16.207 134.469 16.9062 133.953 17.4766C133.438 18.0469 132.812 18.4844 132.078 18.7891C131.352 19.0859 130.527 19.2344 129.605 19.2344C128.746 19.2344 127.957 19.0859 127.238 18.7891C126.527 18.4844 125.91 18.0469 125.387 17.4766C124.871 16.9062 124.469 16.207 124.18 15.3789C123.898 14.5508 123.758 13.6094 123.758 12.5547C123.758 11.1484 123.996 9.95312 124.473 8.96875C124.949 7.97656 125.629 7.22266 126.512 6.70703C127.402 6.18359 128.461 5.92188 129.688 5.92188C130.859 5.92188 131.883 6.18359 132.758 6.70703C133.641 7.23047 134.324 7.98828 134.809 8.98047C135.301 9.96484 135.547 11.1562 135.547 12.5547ZM125.773 12.5547C125.773 13.5859 125.91 14.4805 126.184 15.2383C126.457 15.9961 126.879 16.582 127.449 16.9961C128.02 17.4102 128.754 17.6172 129.652 17.6172C130.543 17.6172 131.273 17.4102 131.844 16.9961C132.422 16.582 132.848 15.9961 133.121 15.2383C133.395 14.4805 133.531 13.5859 133.531 12.5547C133.531 11.5312 133.395 10.6484 133.121 9.90625C132.848 9.15625 132.426 8.57812 131.855 8.17188C131.285 7.76562 130.547 7.5625 129.641 7.5625C128.305 7.5625 127.324 8.00391 126.699 8.88672C126.082 9.76953 125.773 10.9922 125.773 12.5547ZM144.746 5.92188C145.004 5.92188 145.273 5.9375 145.555 5.96875C145.836 5.99219 146.086 6.02734 146.305 6.07422L146.059 7.87891C145.848 7.82422 145.613 7.78125 145.355 7.75C145.098 7.71875 144.855 7.70312 144.629 7.70312C144.113 7.70312 143.625 7.80859 143.164 8.01953C142.711 8.22266 142.312 8.51953 141.969 8.91016C141.625 9.29297 141.355 9.75781 141.16 10.3047C140.965 10.8438 140.867 11.4453 140.867 12.1094V19H138.91V6.15625H140.527L140.738 8.52344H140.82C141.086 8.04688 141.406 7.61328 141.781 7.22266C142.156 6.82422 142.59 6.50781 143.082 6.27344C143.582 6.03906 144.137 5.92188 144.746 5.92188ZM153.676 5.92188C154.77 5.92188 155.707 6.16406 156.488 6.64844C157.27 7.13281 157.867 7.8125 158.281 8.6875C158.695 9.55469 158.902 10.5703 158.902 11.7344V12.9414H150.031C150.055 14.4492 150.43 15.5977 151.156 16.3867C151.883 17.1758 152.906 17.5703 154.227 17.5703C155.039 17.5703 155.758 17.4961 156.383 17.3477C157.008 17.1992 157.656 16.9805 158.328 16.6914V18.4023C157.68 18.6914 157.035 18.9023 156.395 19.0352C155.762 19.168 155.012 19.2344 154.145 19.2344C152.91 19.2344 151.832 18.9844 150.91 18.4844C149.996 17.9766 149.285 17.2344 148.777 16.2578C148.27 15.2812 148.016 14.0859 148.016 12.6719C148.016 11.2891 148.246 10.0938 148.707 9.08594C149.176 8.07031 149.832 7.28906 150.676 6.74219C151.527 6.19531 152.527 5.92188 153.676 5.92188ZM153.652 7.51562C152.613 7.51562 151.785 7.85547 151.168 8.53516C150.551 9.21484 150.184 10.1641 150.066 11.3828H156.863C156.855 10.6172 156.734 9.94531 156.5 9.36719C156.273 8.78125 155.926 8.32812 155.457 8.00781C154.988 7.67969 154.387 7.51562 153.652 7.51562ZM168.043 5.92188C168.301 5.92188 168.57 5.9375 168.852 5.96875C169.133 5.99219 169.383 6.02734 169.602 6.07422L169.355 7.87891C169.145 7.82422 168.91 7.78125 168.652 7.75C168.395 7.71875 168.152 7.70312 167.926 7.70312C167.41 7.70312 166.922 7.80859 166.461 8.01953C166.008 8.22266 165.609 8.51953 165.266 8.91016C164.922 9.29297 164.652 9.75781 164.457 10.3047C164.262 10.8438 164.164 11.4453 164.164 12.1094V19H162.207V6.15625H163.824L164.035 8.52344H164.117C164.383 8.04688 164.703 7.61328 165.078 7.22266C165.453 6.82422 165.887 6.50781 166.379 6.27344C166.879 6.03906 167.434 5.92188 168.043 5.92188Z"
            fill="white"
          />
        </svg>
      </a>

      <a href="" id="github">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
    </Container>
  );
};

export default Header;