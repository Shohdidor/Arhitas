import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

// MUI 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // <-- Add this line
import YandexMap from '../Component/YandexMap/YandexMap';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DehazeIcon from '@mui/icons-material/Dehaze';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Layout() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['البريد الوارد', 'المميزة', 'إرسال بريد', 'المسودات'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['جميع الرسائل', 'السلة', 'البريد المزعج'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

const location = useLocation()
const {category} = useParams()
const { id } = useParams ()




// Check if the current route is '/profile'
const isProfilePage = location.pathname === `/Profile/${id}`;

  if (isProfilePage) {
    // Return only the Outlet component without the layout and footer
    return <>
    <nav className="flex items-center py-4 sm:py-6 px-4 sm:px-8 border-b border-gray-300">
      <Link to={"/"}>
      <button className="text-black">
        <ArrowBackIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      </Link>

      <h1 className="flex-1 text-center text-lg sm:text-xl font-serif">
      المشاريع المنجزة      
      </h1>

      <div className="w-5 sm:w-6" />
    </nav>
    <Outlet />
    </> 
  }

  const isCatalogPage = location.pathname.includes("Catalog") ;
  const isInformationPage = location.pathname.includes("Information") ;
  
  if (isCatalogPage) {
    return <>
    <div className='bg-gray-200 overflow-hidden'>
      <div className='flex sm:px-[200px] sm:flex justify-between px-[20px] pt-[20px]'>

    <img className='w-[35.5%] sm:w-[13.3%] ml-0 sm:ml-[-22px] mt-[-5px] sm:mt-[-15px]' src="https://static.tildacdn.pro/tild6531-3434-4237-a233-343737316137/logo_AF_ATAS.svg" alt="Arhitas" />

    <div className='flex items-center gap-[5px] ml-[65px]'>

      <div>

    <h1 className='text-[13px] sm:text-[14px] font-medium text-right sm:flex sm:gap-[10px sm:items-center] sm:text-right'>
          <div className='hidden sm:block'>
          <WhatsAppIcon className='text-[#1e65888e]' />
          </div>
          +7 747 094 2045
          <br />
        </h1>
          <div className='hidden sm:flex sm:gap-[10px] sm:items-center'>
          <EmailIcon className='text-[#1e65888e]' />
          <h1 className='text-[12px] sm:text-[14px] font-medium'>
          info@arhitas.com
          </h1>
          </div>
          <h1 className='text-[12px] sm:hidden sm:text-[15px] font-medium'>
          info@arhitas.com
          </h1>
      </div>

        <div className='sm:hidden bg-[#C4956A] rounded-[50px] w-[28%] m-auto inline-block '>
      <Button onClick={toggleDrawer(true)}><DehazeIcon sx={{ height : "4vh"}} className='text-gray-200 ml-[-18.5px] mt-[1px]' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>

    <div className='hidden sm:block'>
    <p className='text-center text-[14px] ml-[12px] text-[#496D9D] py-[5px]'>
          استشارة مجانية
          </p>

      <button className='bg-[#C4956A] sm:inline-block sm:ml-[15px] hidden text-[15px] font-medium text-white px-[25px] py-[7px] rounded-[50px]'>
            طلب مكالمة
          </button>

    </div>

      </div>

    </div>


      <div className='sm:hidden'>
          <p className='text-center text-[15px] py-[13px]'>
          استشارة مجانية
          </p>
          <button className='bg-[#C4956A] sm:inline-block hidden text-[18px] text-white px-[20px] py-[5px] rounded-[50px]'>
            طلب مكالمة
          </button>

      </div>

      <div className='flex sm:hidden justify-between px-[27px] pb-[45px]'>

        <button className='py-[6px] text-[15px] px-[35px] border-[1px] rounded-[50px] border-[#C4956A] text-[#C4956A]'>
          الاتصال
        </button>

        <button  className='py-[6px] text-[15px] px-[20px] border-[1px] rounded-[50px] border-[#75e075] text-[#5eb35e]'>
          ارسال عبر WhatsApp
        </button>

      </div>
      <p className='text-gray-700 text-center text-[15px] pb-[40px]'>
      الأثاث الخارجي من الحجر الماركبي المركب
      </p>

    </div>

    <Outlet></Outlet>

    <YandexMap />
    </> 
  }

  if (isInformationPage) {
    return <>
    <div className='bg-gray-200 overflow-hidden'>
      <div className='flex sm:px-[200px] sm:flex justify-between px-[20px] pt-[20px]'>

    <img className='w-[35.5%] sm:w-[13.3%] ml-0 sm:ml-[-22px] mt-[-5px] sm:mt-[-15px]' src="https://static.tildacdn.pro/tild6531-3434-4237-a233-343737316137/logo_AF_ATAS.svg" alt="Arhitas" />

    <div className='flex items-center gap-[5px] ml-[65px]'>

      <div>

    <h1 className='text-[13px] sm:text-[14px] font-medium text-right sm:flex sm:gap-[10px sm:items-center] sm:text-right'>
          <div className='hidden sm:block'>
          <WhatsAppIcon className='text-[#1e65888e]' />
          </div>
          +7 747 094 2045
          <br />
        </h1>
          <div className='hidden sm:flex sm:gap-[10px] sm:items-center'>
          <EmailIcon className='text-[#1e65888e]' />
          <h1 className='text-[12px] sm:text-[14px] font-medium'>
          info@arhitas.com
          </h1>
          </div>
          <h1 className='text-[12px] sm:hidden sm:text-[15px] font-medium'>
          info@arhitas.com
          </h1>
      </div>

        <div className='sm:hidden bg-[#C4956A] rounded-[50px] w-[28%] m-auto inline-block '>
      <Button onClick={toggleDrawer(true)}><DehazeIcon sx={{ height : "4vh"}} className='text-gray-200 ml-[-18.5px] mt-[1px]' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>

    <div className='hidden sm:block'>
    <p className='text-center text-[14px] ml-[12px] text-[#496D9D] py-[5px]'>
          استشارة مجانية
          </p>

      <button className='bg-[#C4956A] sm:inline-block sm:ml-[15px] hidden text-[15px] font-medium text-white px-[25px] py-[7px] rounded-[50px]'>
            طلب مكالمة
          </button>

    </div>

      </div>

    </div>


      <div className='sm:hidden'>
          <p className='text-center text-[15px] py-[13px]'>
          استشارة مجانية
          </p>
          <button className='bg-[#C4956A] sm:inline-block hidden text-[18px] text-white px-[20px] py-[5px] rounded-[50px]'>
            طلب مكالمة
          </button>

      </div>

      <div className='flex sm:hidden justify-between px-[27px] pb-[45px]'>

        <button className='py-[6px] text-[15px] px-[35px] border-[1px] rounded-[50px] border-[#C4956A] text-[#C4956A]'>
          الاتصال
        </button>

        <button  className='py-[6px] text-[15px] px-[20px] border-[1px] rounded-[50px] border-[#75e075] text-[#5eb35e]'>
          ارسال عبر WhatsApp
        </button>

      </div>
      <p className='text-gray-700 text-center text-[15px] pb-[40px]'>
      الأثاث الخارجي من الحجر الماركبي المركب
      </p>

    </div>

    <Outlet></Outlet>

    <YandexMap />
    </> 
  }



  return (
    <>
      <div className='bg-[url("https://i.pinimg.com/originals/c1/59/21/c1592137a443b7b11846f938af4fc5b7.jpg")] bg-cover bg-center h-full w-full'>
        <div className='flex sm:flex-row justify-center gap-4 sm:gap-[250px] items-center pr-4 sm:pr-[65px] pt-4 sm:pt-[22px]'>

          <div className='text-center sm:text-left'>
            <p className='text-white font-medium text-[16px] sm:text-[18px] hidden sm:inline-block'>
              نُنشئ بيئة حضرية    
            </p>
            <ul className='flex gap-2 sm:gap-[10px] py-2 sm:py-[14px] justify-center sm:justify-start'>
              <li className='hidden sm:inline-block'>
                <FacebookIcon sx={{ color: "white", fontSize: "20px", cursor: "pointer" }} />
              </li>
              <li className='hidden sm:inline-block'>
                <InstagramIcon sx={{ color: "white", fontSize: "20px", cursor: "pointer" }} />
              </li>
              <li className='hidden sm:inline-block'>
                <YouTubeIcon sx={{ color: "white", fontSize: "20px", cursor: "pointer" }} />
              </li>
              <li className='hidden sm:inline-block'>
                <TwitterIcon sx={{ color: "white", fontSize: "20px", cursor: "pointer" }} />
              </li>
            </ul>
          </div>

          <img className='w-[35.6%] sm:w-[12.3%] ml-0 sm:ml-[-22px] mt-1 sm:mt-[-15px]' src="https://static.tildacdn.pro/tild6537-6235-4463-a166-393635646330/logo_AF_ATAS.svg" alt="Arhitas" />

          <h1 className='text-white  font-medium text-[20px] sm:text-[19px] text-center sm:text-right'>
            +٧ ٧٤٧ ٠٩٤ ٢٠ ٤٥
            <br />
            <span className='sm:block hidden'>
              info@arhitas.com
            </span>
          </h1>

        </div>

        <div className='sm:flex hidden sm:flex-wrap items-center justify-center gap-4 sm:gap-[70px] pt-4 sm:pt-[20px] text-white font-medium text-[18px] sm:text-[24px]'>

          <Link to={"/"}>
            <h1 className='hover:text-gray-300 cursor-pointer uppercase font-serif'>
              المعرض
            </h1>
          </Link>

            <h1 className='hover:text-gray-300 cursor-pointer uppercase font-serif'>
              المقالات والأخبار
            </h1>

          <h1 className='hover:text-gray-300 cursor-pointer uppercase font-serif'>
            التقييمات
          </h1>

          <h1 className='hover:text-gray-300 cursor-pointer uppercase font-serif'>
            عنّا
          </h1>

          <h1 className='hover:text-gray-300 cursor-pointer uppercase font-serif'>
            الاتصالات
          </h1>

        </div>

        <h1 className='text-[30px] w-[50%] text-center m-auto sm:text-[70px] text-white font-bold py-[35px]'>
        الأشكال المعمارية الصغيرة
        </h1>

        <p className='text-white text-[20px] sm:text-[26px] text-center m-auto w-[70%] pb-[50px]'>
        الأثاث الحضري من الرخام المركب
        </p>

        <div className='flex justify-center pb-[200px]'>
        <button className='bg-[#C4956A] font-medium text-[16px] sm:text-[20px] hover:bg-white hover:text-gray-600 duration-200 ease-in-out text-white rounded-[50px] px-[35px] py-[8px]'>
        الحصول على عرض الأسعار
        </button>
        </div>
      </div>

      <Outlet />

      {/* Footer */}
      <YandexMap />

    </>
  );
}

export default Layout;
