import Image from 'next/image'
import UserProfile from './components/Userprofile';
import CompanyList from './components/Company';
export default function Home() {
  return (
    <div>
      <CompanyList/>
      <UserProfile/>
      <CompanyList/>
    </div>
  );
};
      
