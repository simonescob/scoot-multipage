import ButtonYellow from "./ButtonYellow";
import menuBurger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

function Topbar() {

  const [sideBarActived, setSideBarActived] = useState(false)

  const items = [
    'About',
    'Location',
    'Careers',
  ];

  const activeSideBar = () => {
    setSideBarActived(!sideBarActived);
  }

  return (
    <nav className="bg-white flex items-center justify-center h-16 lg:h-24">

      <div className="flex justify-between container max-w-6xl font-space-mono">

        <div className="hidden lg:flex items-center">

          <div className="lg:mr-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="29">
              <path fill="#495567" d="M9.12 28.56c2.613 0 4.64-.587 6.08-1.76 1.44-1.173 2.16-2.747 2.16-4.72v-.24c0-1.787-.64-3.18-1.92-4.18-1.28-1-2.933-1.607-4.96-1.82-1.76-.187-2.973-.42-3.64-.7-.667-.28-1-.74-1-1.38 0-.453.213-.833.64-1.14.427-.307 1.067-.46 1.92-.46.933 0 1.693.207 2.28.62.587.413 1 .98 1.24 1.7l4.56-1.84a8.834 8.834 0 00-.92-1.74c-.4-.6-.92-1.147-1.56-1.64-.64-.493-1.42-.893-2.34-1.2-.92-.307-2.007-.46-3.26-.46-.96 0-1.893.133-2.8.4a7.473 7.473 0 00-2.4 1.18 6.193 6.193 0 00-1.68 1.9c-.427.747-.64 1.613-.64 2.6v.24c0 1.893.66 3.327 1.98 4.3 1.32.973 3.1 1.553 5.34 1.74.827.08 1.513.187 2.06.32.547.133.98.3 1.3.5.32.2.54.413.66.64.12.227.18.473.18.74 0 .453-.233.873-.7 1.26-.467.387-1.327.58-2.58.58-1.413 0-2.46-.32-3.14-.96-.68-.64-1.127-1.387-1.34-2.24L0 22.32c.133.693.393 1.407.78 2.14.387.733.94 1.4 1.66 2 .72.6 1.627 1.1 2.72 1.5 1.093.4 2.413.6 3.96.6zm22.454 0c2.827 0 5.087-.72 6.78-2.16 1.694-1.44 2.767-3.333 3.22-5.68l-4.96-1.24c-.24 1.307-.766 2.347-1.58 3.12-.813.773-1.993 1.16-3.54 1.16-.72 0-1.4-.113-2.04-.34a4.704 4.704 0 01-1.68-1.02c-.48-.453-.86-1.02-1.14-1.7-.28-.68-.42-1.46-.42-2.34v-.24c0-.88.14-1.673.42-2.38.28-.707.66-1.307 1.14-1.8a5.005 5.005 0 011.68-1.14 5.25 5.25 0 012.04-.4c1.547 0 2.747.427 3.6 1.28.854.853 1.36 1.867 1.52 3.04l4.96-1.28c-.453-2.347-1.54-4.24-3.26-5.68-1.72-1.44-3.966-2.16-6.74-2.16-1.44 0-2.793.24-4.06.72a9.726 9.726 0 00-3.32 2.08c-.946.907-1.686 2-2.22 3.28-.533 1.28-.8 2.72-.8 4.32v.48c0 1.6.267 3.027.8 4.28.534 1.253 1.267 2.307 2.2 3.16.934.853 2.034 1.507 3.3 1.96 1.267.453 2.634.68 4.1.68zm22.455 0c1.36 0 2.66-.227 3.9-.68a9.997 9.997 0 003.3-1.98c.96-.867 1.72-1.933 2.28-3.2.56-1.267.84-2.727.84-4.38v-.48c0-1.627-.28-3.073-.84-4.34-.56-1.267-1.32-2.34-2.28-3.22a9.827 9.827 0 00-3.3-2c-1.24-.453-2.54-.68-3.9-.68-1.36 0-2.66.227-3.9.68a9.827 9.827 0 00-3.3 2c-.96.88-1.72 1.953-2.28 3.22-.56 1.267-.84 2.713-.84 4.34v.48c0 1.653.28 3.113.84 4.38.56 1.267 1.32 2.333 2.28 3.2a9.997 9.997 0 003.3 1.98c1.24.453 2.54.68 3.9.68zm0-4.8c-.72 0-1.4-.12-2.04-.36-.64-.24-1.2-.587-1.68-1.04a4.911 4.911 0 01-1.14-1.66c-.28-.653-.42-1.393-.42-2.22v-.8c0-.827.14-1.567.42-2.22.28-.653.66-1.207 1.14-1.66.48-.453 1.04-.8 1.68-1.04.64-.24 1.32-.36 2.04-.36s1.4.12 2.04.36c.64.24 1.2.587 1.68 1.04.48.453.86 1.007 1.14 1.66.28.653.42 1.393.42 2.22v.8c0 .827-.14 1.567-.42 2.22a4.911 4.911 0 01-1.14 1.66c-.48.453-1.04.8-1.68 1.04-.64.24-1.32.36-2.04.36zm22.694 4.8c1.36 0 2.66-.227 3.9-.68a9.997 9.997 0 003.3-1.98c.96-.867 1.72-1.933 2.28-3.2.56-1.267.84-2.727.84-4.38v-.48c0-1.627-.28-3.073-.84-4.34-.56-1.267-1.32-2.34-2.28-3.22a9.827 9.827 0 00-3.3-2c-1.24-.453-2.54-.68-3.9-.68-1.36 0-2.66.227-3.9.68a9.827 9.827 0 00-3.3 2c-.96.88-1.72 1.953-2.28 3.22-.56 1.267-.84 2.713-.84 4.34v.48c0 1.653.28 3.113.84 4.38.56 1.267 1.32 2.333 2.28 3.2a9.997 9.997 0 003.3 1.98c1.24.453 2.54.68 3.9.68zm0-4.8c-.72 0-1.4-.12-2.04-.36-.64-.24-1.2-.587-1.68-1.04a4.911 4.911 0 01-1.14-1.66c-.28-.653-.42-1.393-.42-2.22v-.8c0-.827.14-1.567.42-2.22.28-.653.66-1.207 1.14-1.66.48-.453 1.04-.8 1.68-1.04.64-.24 1.32-.36 2.04-.36s1.4.12 2.04.36c.64.24 1.2.587 1.68 1.04.48.453.86 1.007 1.14 1.66.28.653.42 1.393.42 2.22v.8c0 .827-.14 1.567-.42 2.22a4.911 4.911 0 01-1.14 1.66c-.48.453-1.04.8-1.68 1.04-.64.24-1.32.36-2.04.36zM107.097 28v-4.8h-5.36c-.72 0-1.08-.4-1.08-1.2v-9.04h7.16v-4.8h-7.16V0h-5.04v8.16h-5.88v4.8h5.88v11.92c0 .907.287 1.653.86 2.24.573.587 1.313.88 2.22.88h8.4z"/>
            </svg>
          </div>

          <ul className="hidden lg:flex space-x-3 cursor-pointer">
            {items.map((item: string, key) => <li key={key}>{item}</li>)}
          </ul>

        </div>

        <div className="hidden lg:flex">

          <ButtonYellow text="Get Scootin" />

        </div>

        <div className="lg:hidden flex items-center justify-between w-full px-9">

          <div className="" onClick={activeSideBar}>

            <img src={ sideBarActived === true ? close : menuBurger } alt="menu-mobile" />

          </div>

          <div className="">
            <svg width="76" height="20" viewBox="0 0 76 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M74.998 16.2465V19.6078H69.1156C68.4807 19.6078 67.9625 19.4024 67.561 18.9916C67.1595 18.5808 66.9588 18.0579 66.9588 17.423V9.07563H62.8411V5.71429H66.9588V0H70.4882V5.71429H75.5022V9.07563H70.4882V15.4062C70.4882 15.9664 70.7403 16.2465 71.2445 16.2465H74.998ZM6.38655 20C8.21662 20 9.63585 19.5892 10.6443 18.7675C11.6527 17.9458 12.1569 16.8441 12.1569 15.4622V15.2941C12.1569 14.043 11.7087 13.0672 10.8123 12.3669C9.91597 11.6667 8.75817 11.2418 7.33894 11.0924C6.10644 10.9617 5.25677 10.7983 4.78992 10.6022C4.32306 10.4062 4.08964 10.084 4.08964 9.63585C4.08964 9.31839 4.23903 9.05229 4.53782 8.83753C4.8366 8.62278 5.28478 8.51541 5.88235 8.51541C6.53595 8.51541 7.06816 8.66013 7.47899 8.94958C7.88982 9.23903 8.17927 9.63585 8.34734 10.1401L11.5406 8.85154C11.3912 8.45938 11.1765 8.05322 10.8964 7.63305C10.6162 7.21288 10.2521 6.83007 9.80392 6.48459C9.35574 6.13912 8.80952 5.85901 8.16527 5.64426C7.52101 5.4295 6.76004 5.32213 5.88235 5.32213C5.21008 5.32213 4.55649 5.4155 3.92157 5.60224C3.28665 5.78898 2.72642 6.06443 2.2409 6.42857C1.75537 6.79272 1.36321 7.23623 1.06443 7.7591C0.76564 8.28198 0.616247 8.88889 0.616247 9.57983V9.7479C0.616247 11.0738 1.07843 12.0775 2.0028 12.7591C2.92717 13.4407 4.17367 13.8469 5.7423 13.9776C6.3212 14.0336 6.80205 14.1083 7.18487 14.2017C7.56769 14.2951 7.87115 14.4118 8.09524 14.5518C8.31933 14.6919 8.47339 14.8413 8.55742 15C8.64146 15.1587 8.68347 15.3315 8.68347 15.5182C8.68347 15.8357 8.52007 16.1298 8.19328 16.4006C7.86648 16.6713 7.26424 16.8067 6.38655 16.8067C5.39683 16.8067 4.66387 16.5826 4.18767 16.1345C3.71148 15.6863 3.39869 15.1634 3.2493 14.5658L0 15.6303C0.0933707 16.1158 0.275444 16.6153 0.546219 17.1289C0.816993 17.6424 1.20448 18.1092 1.70868 18.5294C2.21289 18.9496 2.84781 19.2997 3.61345 19.5798C4.37909 19.8599 5.30345 20 6.38655 20ZM22.1108 20C24.0903 20 25.6729 19.4958 26.8587 18.4874C28.0446 17.479 28.7962 16.1531 29.1136 14.5098L25.6403 13.6415C25.4722 14.5565 25.1034 15.2848 24.5338 15.8263C23.9643 16.3679 23.1379 16.6387 22.0548 16.6387C21.5506 16.6387 21.0744 16.5593 20.6263 16.4006C20.1781 16.2418 19.7859 16.0037 19.4498 15.6863C19.1136 15.3688 18.8475 14.972 18.6515 14.4958C18.4554 14.0196 18.3573 13.4734 18.3573 12.8571V12.6891C18.3573 12.0728 18.4554 11.5173 18.6515 11.0224C18.8475 10.5275 19.1136 10.1074 19.4498 9.7619C19.7859 9.41643 20.1781 9.15033 20.6263 8.96358C21.0744 8.77684 21.5506 8.68347 22.0548 8.68347C23.1379 8.68347 23.9783 8.98226 24.5758 9.57983C25.1734 10.1774 25.5282 10.887 25.6403 11.7087L29.1136 10.8123C28.7962 9.169 28.0352 7.84314 26.8307 6.83473C25.6263 5.82633 24.053 5.32213 22.1108 5.32213C21.1024 5.32213 20.1547 5.4902 19.2677 5.82633C18.3807 6.16247 17.6057 6.64799 16.9428 7.28291C16.2798 7.91783 15.7616 8.68347 15.3882 9.57983C15.0147 10.4762 14.8279 11.4846 14.8279 12.605V12.9412C14.8279 14.0616 15.0147 15.0607 15.3882 15.9384C15.7616 16.8161 16.2752 17.5537 16.9288 18.1513C17.5824 18.7488 18.3527 19.2064 19.2397 19.5238C20.1267 19.8413 21.0838 20 22.1108 20ZM40.5662 19.5238C39.6979 19.8413 38.7875 20 37.8351 20C36.8828 20 35.9724 19.8413 35.104 19.5238C34.2357 19.2064 33.4654 18.7442 32.7931 18.1373C32.1208 17.5303 31.5886 16.7834 31.1965 15.8964C30.8043 15.0093 30.6082 13.9869 30.6082 12.8291V12.493C30.6082 11.3539 30.8043 10.3408 31.1965 9.45378C31.5886 8.56676 32.1208 7.81513 32.7931 7.19888C33.4654 6.58263 34.2357 6.11578 35.104 5.79832C35.9724 5.48086 36.8828 5.32213 37.8351 5.32213C38.7875 5.32213 39.6979 5.48086 40.5662 5.79832C41.4346 6.11578 42.2049 6.58263 42.8772 7.19888C43.5494 7.81513 44.0816 8.56676 44.4738 9.45378C44.8659 10.3408 45.062 11.3539 45.062 12.493V12.8291C45.062 13.9869 44.8659 15.0093 44.4738 15.8964C44.0816 16.7834 43.5494 17.5303 42.8772 18.1373C42.2049 18.7442 41.4346 19.2064 40.5662 19.5238ZM37.8351 16.6387C37.3309 16.6387 36.8547 16.5546 36.4066 16.3866C35.9584 16.2185 35.5662 15.9757 35.2301 15.6583C34.894 15.3408 34.6278 14.9533 34.4318 14.4958C34.2357 14.0383 34.1377 13.5201 34.1377 12.9412V12.381C34.1377 11.8021 34.2357 11.2838 34.4318 10.8263C34.6278 10.3688 34.894 9.98133 35.2301 9.66387C35.5662 9.34641 35.9584 9.10364 36.4066 8.93557C36.8547 8.76751 37.3309 8.68347 37.8351 8.68347C38.3393 8.68347 38.8155 8.76751 39.2637 8.93557C39.7119 9.10364 40.104 9.34641 40.4402 9.66387C40.7763 9.98133 41.0424 10.3688 41.2385 10.8263C41.4346 11.2838 41.5326 11.8021 41.5326 12.381V12.9412C41.5326 13.5201 41.4346 14.0383 41.2385 14.4958C41.0424 14.9533 40.7763 15.3408 40.4402 15.6583C40.104 15.9757 39.7119 16.2185 39.2637 16.3866C38.8155 16.5546 38.3393 16.6387 37.8351 16.6387ZM56.4586 19.5238C55.5902 19.8413 54.6799 20 53.7275 20C52.7751 20 51.8647 19.8413 50.9964 19.5238C50.128 19.2064 49.3577 18.7442 48.6855 18.1373C48.0132 17.5303 47.481 16.7834 47.0888 15.8964C46.6967 15.0093 46.5006 13.9869 46.5006 12.8291V12.493C46.5006 11.3539 46.6967 10.3408 47.0888 9.45378C47.481 8.56676 48.0132 7.81513 48.6855 7.19888C49.3577 6.58263 50.128 6.11578 50.9964 5.79832C51.8647 5.48086 52.7751 5.32213 53.7275 5.32213C54.6799 5.32213 55.5902 5.48086 56.4586 5.79832C57.3269 6.11578 58.0972 6.58263 58.7695 7.19888C59.4418 7.81513 59.974 8.56676 60.3661 9.45378C60.7583 10.3408 60.9544 11.3539 60.9544 12.493V12.8291C60.9544 13.9869 60.7583 15.0093 60.3661 15.8964C59.974 16.7834 59.4418 17.5303 58.7695 18.1373C58.0972 18.7442 57.3269 19.2064 56.4586 19.5238ZM53.7275 16.6387C53.2233 16.6387 52.7471 16.5546 52.2989 16.3866C51.8507 16.2185 51.4586 15.9757 51.1224 15.6583C50.7863 15.3408 50.5202 14.9533 50.3241 14.4958C50.128 14.0383 50.03 13.5201 50.03 12.9412V12.381C50.03 11.8021 50.128 11.2838 50.3241 10.8263C50.5202 10.3688 50.7863 9.98133 51.1224 9.66387C51.4586 9.34641 51.8507 9.10364 52.2989 8.93557C52.7471 8.76751 53.2233 8.68347 53.7275 8.68347C54.2317 8.68347 54.7079 8.76751 55.1561 8.93557C55.6042 9.10364 55.9964 9.34641 56.3325 9.66387C56.6687 9.98133 56.9348 10.3688 57.1309 10.8263C57.3269 11.2838 57.425 11.8021 57.425 12.381V12.9412C57.425 13.5201 57.3269 14.0383 57.1309 14.4958C56.9348 14.9533 56.6687 15.3408 56.3325 15.6583C55.9964 15.9757 55.6042 16.2185 55.1561 16.3866C54.7079 16.5546 54.2317 16.6387 53.7275 16.6387Z" fill="#495567"/>
            </svg>
          </div>

          <div className="w-10"></div>

        </div>

      </div>

      {
        sideBarActived === true &&
        <div className="lg:hidden z-10 flex flex-col justify-between absolute left-0 top-16 w-3/4 h-[92vh] bg-dark-strong p-7">
        
          <ul className="font-space-mono font-bold text-[white] space-y-5 cursor-pointer mt-10">
            {items.map((item: string, key) => <li key={key}>{item}</li>)}
          </ul>
        
          <ButtonYellow text="Get Scootin" />
        
        </div>
      }

    </nav>
  )
}

export default Topbar;