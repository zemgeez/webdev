import { WidthIcon } from "@radix-ui/react-icons";

export default function Footer() {
return(
        <div className="flex px-5 text-sm p-3 font-light pt-20">
          {/* Logo */}
         <p> <img src="/logo.jpeg" alt="Logo" style={{height:100, width:100,}}/>
             {/* Title */}
    <h2>National Institute Of Technology</h2>
      </p>
          {/* Content */}
          <div className="flex">
            <ul>
              <li>Useful Links</li>
              <li>Audit Reorts and balance sheet</li>
              <li>MOOC Courses</li>
              <p>Mandatory Disclosure</p>
              <p>E-resources</p>
              <p>Annual Reports</p>
              <p>Higher Education Policy</p>
              <p>MoUs with companies</p>
              <p>National innovation and startup policy</p>
              <p>Gallery</p>
              <p>Nodal Officer</p>
            </ul>
      
            {/* Other Links */}
            <div className="flex px-5">
              <ul>
                <li>Other Links</li>
                <li>Alumni</li>
                <p>Annual Reports/Annual Accounts</p>
                <p>Anti-ragging policies/committee</p>
                <p>Central computer center</p>
                <p>Grievance cell</p>
                <p>Internal Complaints</p>
                <p>Committee on gender</p>
                <p>Harassment</p>
                <p>Complaints of caste based</p>
                <p>Discrimination</p>
              </ul>
      
              {/* Additional Links */}
              <div className="flex px-5">
                <ul>
                  <li>Additional Links</li>
                  <li>AICTE</li>
                  <p>Swayam</p>
                  <p>Digilocker</p>
                  <p>Online RTI portal, Silchar</p>
                  <p>B.TECH Admissions</p>
                </ul>
      
                {/* Important Links */}
                <div className="flex px-5">
                  <ul>
                    <li>Important Links</li>
                    <li>Webmail</li>
                    <p>NITSis</p>
                    <p>Holidays</p>
                    <p>Academic Calendar</p>
                    <p>Academic Timetable</p>
                    <p>Admission Advertisement & Notices</p>
                    <p>Career</p>
                    <p>Guest House</p>
                  </ul>

                </div>
            </div>
        </div>
  </div>
    </div>



)
}
    
      
       
      

