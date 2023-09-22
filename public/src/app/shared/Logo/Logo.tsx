'use client'
import { FunctionComponent } from "react";
import { useMediaQuery } from 'react-responsive'
import './Logo.css'

interface Props {
  firstColor: string;
  secondColor: string;
}

export const Logo: FunctionComponent<Props> = ({
  firstColor,
  secondColor
}) => {

  const isMobile = useMediaQuery({ maxWidth: 500});

  return (
    <div className="logo">
      <div className="logo__bag">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="54" viewBox="0 0 45 54" fill="none">
          <path d="M8.79729 19.2982C10.3557 14.4361 13.707 5.84619 19.5634 5.10395C20.3678 5.00387 20.3845 3.71955 19.5634 3.82796C12.9278 4.67028 9.34188 13.4104 7.56567 18.9563C7.31432 19.7402 8.55431 20.0822 8.79729 19.2982Z" fill="#4D4D4C"/>
          <path d="M10.9587 20.349L11.2687 18.556L4.54932 18.506V50.6141H41.414V18.506L35.0464 18.556L35.3313 20.349H39.6294V48.5958H6.50985V20.3824L10.9587 20.349Z" fill={firstColor}/>
          <path d="M18.6836 31.1991C18.6836 31.1991 12.6596 31.9913 11.7213 28.6721C10.7829 25.3529 12.1402 6.86362 20.5688 6.0213" stroke={firstColor} strokeWidth="1.5079" strokeMiterlimit="10"/>
          <path d="M27.5897 31.1991C27.5897 31.1991 33.6137 31.9913 34.5521 28.6721C35.4905 25.3529 34.1332 6.86362 25.7046 6.0213" stroke={firstColor} strokeWidth="1.5079" strokeMiterlimit="10"/>
          <path d="M23.0571 8.80679C24.7183 8.80679 26.065 7.429 26.065 5.72941C26.065 4.02983 24.7183 2.65204 23.0571 2.65204C21.396 2.65204 20.0493 4.02983 20.0493 5.72941C20.0493 7.429 21.396 8.80679 23.0571 8.80679Z" fill={firstColor} stroke={firstColor} strokeMiterlimit="10"/>
          <path d="M18.8931 33.0672C20.1055 33.0672 21.0882 32.0628 21.0882 30.8238C21.0882 29.5848 20.1055 28.5804 18.8931 28.5804C17.6808 28.5804 16.698 29.5848 16.698 30.8238C16.698 32.0628 17.6808 33.0672 18.8931 33.0672Z" fill={firstColor} stroke={firstColor} strokeMiterlimit="10"/>
          <path d="M27.2715 33.0672C28.4839 33.0672 29.4667 32.0628 29.4667 30.8238C29.4667 29.5848 28.4839 28.5804 27.2715 28.5804C26.0592 28.5804 25.0764 29.5848 25.0764 30.8238C25.0764 32.0628 26.0592 33.0672 27.2715 33.0672Z" fill={firstColor} stroke={firstColor} strokeMiterlimit="10"/>
          <path d="M14.4694 39.4554C15.4087 39.4554 16.1702 38.6975 16.1702 37.7625C16.1702 36.8275 15.4087 36.0695 14.4694 36.0695C13.53 36.0695 12.7686 36.8275 12.7686 37.7625C12.7686 38.6975 13.53 39.4554 14.4694 39.4554Z" stroke="#4D4D4C" strokeWidth="1.1607" strokeMiterlimit="10"/>
          <path d="M13.8912 39.4888C13.355 43.692 7.44831 45.9688 4.74211 42.291C3.19212 40.181 3.52726 37.4205 4.53265 35.0604C4.62482 34.8435 4.55779 32.9254 4.55779 32.4C4.55779 32.3249 4.3986 32.5501 4.35671 32.6252C2.39618 36.2113 1.13105 41.6655 5.13589 44.3842C8.90614 46.9362 14.528 44.3175 15.0977 39.789C15.215 38.9884 13.9918 38.6882 13.8912 39.4888Z" fill="#4D4D4C"/>
          <path d="M13.1037 18.531H33.2117L33.5301 20.324H12.7686L13.1037 18.531Z" fill={firstColor}/>
        </svg>
      </div>
      <div className="logo__text">
        <svg xmlns="http://www.w3.org/2000/svg" width="132" height="20" viewBox="0 0 132 20" fill="none">
          <path d="M11.3076 15.6613H8.52005V8.81978H2.78756V15.6613H0V0.112396H2.78756V6.35444H8.52005V0.112396H11.3076V15.6613Z" fill={firstColor}/>
          <path d="M23.8517 14.0951L22.1582 15.7737H16.4706L14.5598 13.8628V6.2645L16.4706 4.35367H21.6636L23.5744 6.2645V11.0303H17.1001V12.9412L17.9993 13.8404H20.8768L22.2031 12.5815L23.8517 14.0951ZM17.9993 6.28698L17.1001 7.18619V9.18694H21.0416V7.18619L20.1424 6.28698H17.9993Z" fill={firstColor}/>
          <path d="M33.2933 4.35371L35.2042 6.26454V15.6613H33.3383L32.7538 14.1102H32.6564L30.8879 15.7662H27.8906L25.9797 13.8554V10.7831L27.8906 8.87226H32.6564V7.15626L31.7872 6.27953H29.1944L27.9505 7.44101L26.2495 5.91235L27.8156 4.34622H33.2933V4.35371ZM29.3967 10.8131L28.5275 11.6898V12.9412L29.4267 13.8404H30.6332L32.6564 12.0869V10.8131H29.3967Z" fill={firstColor}/>
          <path d="M38.1116 0.112396H40.6593V15.6688H38.1116V0.112396Z" fill={firstColor}/>
          <path d="M43.8142 6.51181H42.4429V4.47359H43.8142V2.92245L45.725 1.55115H46.347V4.47359H48.55V6.51181H46.347V12.4916L47.2462 13.3908H49.1795V15.6613H45.725L43.8142 13.7505V6.51181Z" fill={firstColor}/>
          <path d="M60.4871 15.6613H57.9393V7.27613L57.0626 6.39939H55.8786L53.8554 8.07043V15.6688H51.3076V0.112396H53.8554V6.01723L55.6238 4.36118H58.5763L60.4871 6.27201V15.6613Z" fill={firstColor}/>
          <path d="M67.0889 2.33795L65.9723 3.45448V5.56013L67.0889 6.69164H72.042L74.5149 9.16448V13.3233L72.0645 15.7737H65.0282L62.8401 13.6006L64.706 11.7797L66.4369 13.4357H70.5883L71.7198 12.3192V10.1536L70.5883 9.03709H65.6501L63.1773 6.56426V2.45035L65.6276 0H72.057L74.1402 2.0607L72.2519 3.92656L70.5808 2.33795H67.0889Z" fill={firstColor}/>
          <path d="M86.0322 15.6613H83.4845V7.27613L82.6077 6.39939H81.4238L79.4006 8.07043V15.6688H76.8528V0.112396H79.4006V6.01723L81.169 4.36118H84.1214L86.0322 6.27201V15.6613Z" fill={firstColor}/>
          <path d="M96.3881 4.35367L98.2989 6.2645V13.8628L96.3881 15.7737H90.7455L88.8347 13.8628V6.2645L90.7455 4.35367H96.3881ZM92.2442 6.39938L91.3675 7.27611V12.8512L92.2442 13.728H94.8819L95.7587 12.8512V7.27611L94.8819 6.39938H92.2442Z" fill={firstColor}/>
          <path d="M108.467 4.35367L110.378 6.2645V13.8629L108.467 15.7737H105.403L103.634 14.1176V20H101.086V4.46607H102.952L103.537 6.01721H103.634L105.403 4.36116H108.467V4.35367ZM106.969 13.728L107.846 12.8512V7.27611L106.969 6.39938H105.665L103.642 8.07042V12.0644L105.665 13.7355H106.969V13.728Z" fill={firstColor}/>
          <path d="M122.353 14.0951L120.659 15.7737H114.972L113.061 13.8628V6.2645L114.972 4.35367H120.165L122.076 6.2645V11.0303H115.601V12.9412L116.501 13.8404H119.378L120.704 12.5815L122.353 14.0951ZM116.508 6.28698L115.609 7.18619V9.18694H119.55V7.18619L118.651 6.28698H116.508Z" fill={firstColor}/>
          <path d="M127.381 6.01727H127.478L129.134 4.46613H131.45V6.71416H129.307L127.471 8.2653V15.6613H124.923V4.46613H126.789L127.381 6.01727Z" fill={firstColor}/>
        </svg>
        {!isMobile && 
          <svg xmlns="http://www.w3.org/2000/svg" width="110" height="9" viewBox="0 0 110 9" fill="none">
            <path d="M1.86402 0.970208H0V0H4.78992V0.970208H2.93354V6.05807H1.85638V0.970208H1.86402Z" fill={secondColor}/>
            <path d="M9.45758 0L10.5195 1.06188V4.98855L9.45758 6.05043H6.70739L5.64551 4.98855V1.06188L6.70739 0H9.45758ZM7.32618 0.932011L6.72267 1.52789V4.52254L7.32618 5.11842H8.85407L9.44995 4.52254V1.52789L8.85407 0.932011H7.32618Z" fill={secondColor}/>
            <path d="M15.8748 6.05043H12.1697V0H15.7526L16.7533 1.00077V2.08557L15.997 2.84187L16.8832 3.72804V5.04966L15.8748 6.05043ZM15.6762 1.46677L15.1414 0.932011H13.2468V2.48281H15.1185L15.6762 1.92514V1.46677ZM15.806 4.0107L15.2025 3.41483H13.2545V5.11842H15.2713L15.806 4.58366V4.0107Z" fill={secondColor}/>
            <path d="M21.864 0L22.9259 1.06188V6.05043H22.1314L21.9022 5.17189H21.8563L20.9167 6.05043H19.236L18.1665 4.98855V3.48358L19.236 2.4217H21.864V1.52789L21.2681 0.932011H19.809L19.0985 1.589L18.3651 0.817421L19.236 0H21.864ZM19.8319 3.35371L19.236 3.95722V4.53018L19.8319 5.12606H20.6493L21.8487 4.10238V3.35371H19.8319Z" fill={secondColor}/>
            <path d="M26.6464 6.05043L25.7068 5.17189V8.41865H24.6296V0H25.4241L25.6533 0.886173H25.7068L26.6464 0H28.3348L29.3966 1.06188V4.98855L28.3348 6.05043H26.6464ZM27.7083 5.12606L28.3118 4.53018V1.53553L27.7083 0.939652H26.9062L25.7144 1.96334V4.10237L26.9062 5.12606H27.7083Z" fill={secondColor}/>
            <path d="M31.0466 6.05043V0H32.1238V2.36058L32.5134 2.04737H34.3698L35.4393 3.10925V4.98091L34.3698 6.04279H31.0466V6.05043ZM33.7586 2.98702H32.1238V5.12606H33.7586L34.3545 4.53018V3.58289L33.7586 2.98702ZM36.2949 6.05043V0H37.3721V6.05043H36.2949Z" fill={secondColor}/>
            <path d="M46.4705 7.36437H45.3934V6.05802H41.7341V7.36437H40.6646V5.12602H41.1076L41.4514 4.72877L42.0397 0.00759888H45.8899V5.12602H46.4782V7.36437H46.4705ZM42.9487 0.931969L42.5438 4.66001L42.1542 5.11837H44.8051V0.931969H42.9487Z" fill={secondColor}/>
            <path d="M47.9757 6.05039H46.8909V4.97323H47.4256L47.7694 4.57598L48.3347 0.00759888H52.185V6.05802H51.1078V0.93961H49.2591L48.7702 5.16421L47.9757 6.05039Z" fill={secondColor}/>
            <path d="M58.3423 0V6.05043H57.2651V3.85791H55.9435L54.7976 6.05043H53.644L54.8816 3.74332L53.7816 2.68908V1.06188L54.8434 0H58.3423ZM55.4622 2.94118H57.2728V0.939652H55.4622L54.8587 1.53553V2.33767L55.4622 2.94118Z" fill={secondColor}/>
            <path d="M61.887 5.15657L62.6203 4.43083L63.3461 5.12602H64.9427L65.5386 4.53014V4.02594L64.9427 3.43006H63.476V2.49805H64.8587L65.4164 1.94037V1.53548L64.8129 0.93961H63.4607L62.7731 1.5966L62.0474 0.855576L62.9106 0.00759888H65.4317L66.4935 1.06948V2.18483L65.7831 2.8953L66.6158 3.728V4.99614L65.5462 6.05802H62.7884L61.887 5.15657Z" fill={secondColor}/>
            <path d="M73.0939 7.36437H72.0167V6.05802H68.3574V7.36437H67.2803V5.12602H67.7234L68.0671 4.72877L68.6554 0.00759888H72.5056V5.12602H73.0939V7.36437ZM69.5721 0.931969L69.1672 4.66001L68.7776 5.11837H71.4285V0.931969H69.5721Z" fill={secondColor}/>
            <path d="M78.1285 0L79.1904 1.06188V4.98855L78.1285 6.05043H75.3783L74.3164 4.98855V1.06188L75.3783 0H78.1285ZM75.9894 0.932011L75.3859 1.52789V4.52254L75.9894 5.11842H77.5173L78.1132 4.52254V1.52789L77.5173 0.932011H75.9894Z" fill={secondColor}/>
            <path d="M82.8496 6.05043L81.9099 5.17189V8.41865H80.8328V0H81.6273L81.8565 0.886173H81.9099L82.8496 0H84.5379L85.5998 1.06188V4.98855L84.5379 6.05043H82.8496ZM83.9115 5.12606L84.515 4.53018V1.53553L83.9115 0.939652H83.1093L81.9176 1.96334V4.10237L83.1093 5.12606H83.9115Z" fill={secondColor}/>
            <path d="M91.0008 0L92.0627 1.06188V4.98855L91.0008 6.05043H88.2506L87.1887 4.98855V1.06188L88.2506 0H91.0008ZM88.8694 0.932011L88.2659 1.52789V4.52254L88.8694 5.11842H90.3973L90.9932 4.52254V1.52789L90.3973 0.932011H88.8694Z" fill={secondColor}/>
            <path d="M97.418 6.05043H93.7129V0H97.2958L98.2965 1.00077V2.08557L97.5403 2.84187L98.4264 3.72804V5.04966L97.418 6.05043ZM97.227 1.46677L96.6923 0.932011H94.7977V2.48281H96.6694L97.227 1.92514V1.46677ZM97.3493 4.0107L96.7457 3.41483H94.7977V5.11842H96.8145L97.3493 4.58366V4.0107Z" fill={secondColor}/>
            <path d="M99.9465 6.05043V0H101.024V2.36058L101.413 2.04737H103.392L104.454 3.10925V4.98091L103.392 6.04279H99.9465V6.05043ZM102.781 2.98702H101.024V5.12606H102.781L103.384 4.53018V3.58289L102.781 2.98702Z" fill={secondColor}/>
            <path d="M110 0V6.05043H108.923V3.85791H107.601L106.455 6.05043H105.302L106.539 3.74332L105.439 2.68908V1.06188L106.501 0H110ZM107.12 2.94118H108.93V0.939652H107.12L106.516 1.53553V2.33767L107.12 2.94118Z" fill={secondColor}/>
          </svg>
        }
      </div>
    </div>
  )
}