
import Link from "next/link"
export default function Footer() {
return(
    <>
    <div className="  bg-black  ">

        
        <div className="flex px-28 py-16 text-white/60  ">
        <div className="bg-white w-24 h-24 mt-10 ml-0 "><img src="./loco.png" alt="" /></div>
        <ul><li>Useful Links</li>
             
            <li>Audit Reorts and balance sheet</li>
            <li>MOOC Courses</li>
            <p>Mandotary Disclousure</p>
            <p>E-resources</p>
            <p>Annual Reports</p>
            <p>Hhigher Education policy</p>
            <p>MoUs with companies</p>
            <p>National inovation and startup policy</p>
            <p>Gallery</p>
            <p>Nodal Officer</p>
        </ul>

        <div className="flex px-5">
            <ul><li>Other Links</li>
                <li>Alumuni</li>
                <p>Annual Reports/Annual Accounts</p>
                <p>Anti-ragging policies/committee</p>
                <p>Central computer center</p>
                <p>Grievance cell</p>
                <p>Internal Complaints</p>
                <p>Committee on gender</p>
                <p>Harreshment</p>
                <p>Complaints of caste based</p>
                <p>Discrimination</p>
            </ul>

            <div className="flex px-5">
                <ul><li>Other Links</li>
     
                    <li>Aicte</li>
                    <p>Swayam</p>
                    <p>Digilocker</p>
                    <p>Online RTI portal, Silchar</p>
                    <p>B.TECH Admissions</p>
                </ul>


                <div className="flex px-5">
                    <ul><li>Important Links</li>
     
                        <li>Webmail</li>
                        <p>NITSis</p>
                        <p>Holidays</p>
                        <p>Academic Calender</p>
                        <p>Academic TimeTable</p>
                        <p>Admission Advt. & Notices</p>
                        <p>Carrer</p>
                        <p>Guest House</p>
     
                    </ul>

                </div>
            </div>
        </div>
  


        {/* <div className="  ">
            <Link href="https://cdac.in">
                <span className="text-default-600  ">Developed By{ ''}</span>
                <p className="text-primary">C-DAC CINE</p>
            </Link>
        </div> */}
        </div>
  
    </div>



</>

)
}
    
      
       
      

