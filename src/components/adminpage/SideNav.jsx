import React, { useState } from 'react'
import logo from '@assets/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import LayersIcon from '@mui/icons-material/Layers';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import IosShareIcon from '@mui/icons-material/IosShare';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaymentIcon from '@mui/icons-material/Payment';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const SideNav = () => {

  const [cmsOpen, setCmsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [referralOpen, setReferralOpen] = useState(false);
  const [manageRoleOpen, setManageRoleOpen] = useState(false);
  const [paymentsOpen, setPaymentsOpen] = useState(false);

  const handleCmsDropdown = ()=>{
    setCmsOpen((prev)=> !prev);
  }
  const handleFormDropdown = ()=>{
    setFormOpen((prev)=> !prev);
  }
  const handleReferralDropdown = ()=>{
    setReferralOpen((prev)=> !prev);
  }
  const handleManageRoleDropdown = ()=>{
    setManageRoleOpen((prev)=> !prev);
  }
  const handlePaymentsDropdown = ()=>{
    setPaymentsOpen((prev)=> !prev);
  }

  return (
    <div className=' w-[30%] hidden bg-slate-900 scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-900 h-full lg:flex flex-col py-5 items-center sticky left-0 top-0 overflow-y-auto'>
      <div className=' w-full flex gap-2 items-center justify-center'>
        <img src={logo} alt="logo" />
        <Link to='/admin' className=' text-3xl text-white font-bold'>hubnex</Link>
      </div>

      <div className=' flex flex-col w-full h-full items-center py-5 gap-8 '>
        <div className=' w-[70%] m-auto h-full flex flex-col gap-8 text-base text-gray-300 font-semibold'>
          <hr className=' w-full border-[1px] border-white'/>
          <div className=' flex gap-4 items-center'>
            <DashboardIcon/>
            <Link to='/admin'>Dashboard</Link>
          </div>
          <div className=' flex gap-4 items-center'>
            <AccountCircleIcon/>
            <Link to='/admin/recruiter'>Recruiter</Link>
          </div>
          <div className=' flex gap-4 items-center'>
            <BusinessIcon/>
            <Link to='/admin/company'>Company</Link>
          </div>

          <div className=' flex flex-col gap-4 items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>
            <LayersIcon/>
              <div className=' flex flex-col w-full gap-5'>
                <Link to='/admin/cms' className=' flex items-center'>CMS <span onClick={handleCmsDropdown}>{cmsOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></Link>
                {cmsOpen &&
                <div className=' flex flex-col gap-2 '>
                  <Link to='/admin/cms/terms'>Terms and conditions</Link>
                  <Link>Privacy Policy</Link>
                  <Link>Data Protection</Link>
                </div>
                }
              </div>
            </div>

          </div>
          <div className=' flex gap-4 flex-col items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>
              <BackupTableIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <Link to='/admin/forms' className=' flex items-center'>Forms <span onClick={handleFormDropdown}>{formOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></Link>
              {formOpen &&
                <div className=' flex flex-col gap-2 '>
                  <Link to='/admin/forms/invest'>Invest</Link>
                  <Link>Contact Us</Link>
                </div>
                }
              </div>
            </div>
          </div>

          <div className=' flex gap-4 flex-col items-center'>
            <div className=' flex gap-4 items-start w-full'>
              <IosShareIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <Link to='/admin/referral' className=' flex items-center'>Referral <span onClick={handleReferralDropdown}>{referralOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></Link>
                {referralOpen &&
                  <div className=' flex flex-col gap-2 '>
                    <Link >Invest</Link>
                    <Link>Contact Us</Link>
                  </div>
                  }
                </div>
            </div>
          </div>

          <div className=' flex gap-4 flex-col items-center'>
            <div className=' flex gap-4 items-start w-full'>
              <ManageAccountsIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <Link to='/admin/manage-roles' className=' flex items-center'>Manage Roles <span onClick={handleManageRoleDropdown}>{manageRoleOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></Link>
                {manageRoleOpen &&
                  <div className=' flex flex-col gap-2 '>
                    <Link>Invest</Link>
                    <Link>Contact Us</Link>
                  </div>
                  }
              </div>
            </div>
          </div>

          <div className=' flex gap-4 flex-col items-center'>
            <div className=' flex gap-4 items-start w-full'>
              <PaymentIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <Link to='/admin/payments' className=' flex items-center'>Payments <span onClick={handlePaymentsDropdown}>{paymentsOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></Link>
                {paymentsOpen &&
                    <div className=' flex flex-col gap-2 '>
                      <Link>Invest</Link>
                      <Link>Contact Us</Link>
                    </div>
                    }
                </div>
            </div>
          </div>

          <div className=' flex gap-4 items-center'>
            <FileOpenIcon/>
            <Link to='/admin/application'>Applications</Link>
          </div>
          <div className=' flex gap-4 items-center'>
          <DescriptionIcon/>
          <Link to='/admin/invoices'>Invoices</Link>
          </div>
          <div className=' flex gap-4 items-center'>
            <NotificationsActiveIcon/>
            <Link to='/admin/push-notification'>Push Notification</Link>
          </div>
          <div className=' flex gap-4 items-center'>
          <HelpIcon/>
          <Link to='/admin/help'>Need Help</Link>
          </div>
          <hr className=' w-full border-[1px] border-white'/>
        </div>
      </div>

    </div>
  )
}

export default SideNav