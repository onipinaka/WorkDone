import React from 'react';
import nameIcon from '/profile/name.svg'
import addressIcon from '/profile/address.svg'
import backIcon from '/profile/back-icon.svg'
import contentBrushIcon from '/profile/skills.svg'
import dobIcon from '/profile/dob.svg'
import emailIcon from '/profile/email.svg'
import facebookIcon from '/profile/facebook.svg'
import genderIcon from '/profile/gender.svg'
import groupIcon from '/profile/Group 44.svg'
import instagramIcon from '/profile/instagram.svg'
import languageIcon from '/profile/language.svg'
import phoneIcon from '/profile/phone.svg'
import profilePhotoIcon from '/profile/profile-photo.svg'
import settingIcon from '/profile/setting.svg'
import twitterIcon from '/profile/twitter.svg'

const Section = ({ title, fields }) => (
  
  <div className="bg-[#0E6A74] rounded-xl   mb-3">
    <SectionHeader title={title} />
    <div className="pt-4 pb-[2px]">
      {fields.map((field, index) => (
        <InputField key={index} {...field} />
      ))}
    </div>
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="flex justify-between items-center px-4 py-2 bg-[#0E6A74] rounded-t-lg">
    <h2 className="text-white font-semibold text-lg">{title}</h2>
    <img src={settingIcon} alt="edit" className="w-5 h-5 text-yellow-300 cursor-pointer" />
  </div>
);

const InputField = ({ label, icon, placeholder, type = "text" }) => (
  <div className="flex items-start gap-3 mb-4 px-4">
    <div className="pt-4 w-5 h-5">{icon}</div>
    <div className="relative w-full">
      <label className="absolute -top-2 left-3 bg-[#0E6A74] text-[#B1D2D5] text-sm px-1 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#B1D2D5] bg-transparent py-2 px-3 text-white placeholder-white focus:outline-none"
      />
    </div>
  </div>
);


const ProfileForm = () => {
  const personalInfo = [
    { label: "Name", icon: <img src={nameIcon} alt="name" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "Sreyash Singh" },
    { label: "Mobile No.", icon: <img src={phoneIcon} alt="phone" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "9876053567" },
    { label: "Address", icon: <img src={addressIcon} alt="address" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "203E, APJ Hostel, AIT, Pune" },
    { label: "Date of Birth", icon: <img src={dobIcon} alt="dob" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "19/03/2006", type: "date" },
    { label: "Gender", icon: <img src={genderIcon} alt="gender" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "Male" },
  ];

  const generalInfo = [
    { label: "Current Address", icon: <img src={addressIcon} alt="address" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "" },
    { label: "Language", icon: <img src={languageIcon} alt="language" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "English" },
    { label: "Skills", icon: <img src={contentBrushIcon} alt="skills" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "HTML, CSS, React" },
    { label: "Email", icon: <img src={emailIcon} alt="email" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "sreyash12@gmail.com" },
  ];

  const socialMedia = [
    { label: "Instagram", icon: <img src={instagramIcon} alt="instagram" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "www.instagram.com" },
    { label: "Facebook", icon: <img src={facebookIcon} alt="facebook" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "www.facebook.com" },
    { label: "Twitter", icon: <img src={twitterIcon} alt="twitter" className="w-5 h-5 filter brightness-0 invert" />, placeholder: "www.twitter.com" },
  ];

  return (
    <div className="max-w-md mx-auto  bg-[#0E6A74] rounded-2xl">
      <div className='w-full px-4 pt-4 h-fit border-[#DFFAF2] border-b-2 border-solid'>
        <Section title="Personal Information" fields={personalInfo} />
      </div>
      <div className='w-full px-4 pt-4 h-fit border-[#DFFAF2] border-b-2 border-solid'>
        <Section title="General Information" fields={generalInfo} />
      </div>
      <div className='w-full px-4 pt-4 h-fit border-[#DFFAF2] border-b-2 border-solid'>
        <Section title="Social Media" fields={socialMedia} />
      </div>
    </div>
  );
};

export default ProfileForm;
