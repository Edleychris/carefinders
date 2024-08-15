// import React from "react";
import { SiVirustotal } from "react-icons/si";
import PrivateLayout from "../../layout/PrivateLayout";
import { PiChartLineUpThin } from "react-icons/pi";
import dash from "./styles.module.css";
import PatientsChart from "../../components/Charts/PatientsChart";
import DepartmentsChart from "../../components/Charts/DepartmentsChart";
import hosp from "../../assets/hosp.png";
import { Link } from "react-router-dom";
import doctor1 from "../../assets/man.jfif";
import doctor2 from "../../assets/woman.png";

const Dashboard = () => {
  return (
    <PrivateLayout
      pageTitle="Dashboard"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <main className={dash.section1Container}>
        <section className={dash.section1}>
          <div className={dash.card}>
            <div className={dash.left}>
              <div className={dash.cardIcon1}>
                <SiVirustotal style={{ fontSize: "25px", color: "white" }} />
              </div>

              <div className={dash.bottom}>
                <h2>800k</h2>
                <p>Total Patients</p>
              </div>
            </div>

            <div className={dash.right}>
              <div className={dash.numberOne}>
                <p>+20%</p>
              </div>

              <PiChartLineUpThin
                style={{ fontSize: "3rem", color: "#343481" }}
              />
            </div>
          </div>

          <div className={dash.card}>
            <div className={dash.left}>
              <div className={dash.cardIcon2}>
                <SiVirustotal style={{ fontSize: "25px", color: "white" }} />
              </div>

              <div className={dash.bottom}>
                <h2>160</h2>
                <p>Total Doctors</p>
              </div>
            </div>

            <div className={dash.right}>
              <div className={dash.number1}>
                <p>-12%</p>
              </div>

              <PiChartLineUpThin style={{ fontSize: "3rem", color: "red" }} />
            </div>
          </div>

          <div className={dash.card}>
            <div className={dash.left}>
              <div className={dash.cardIcon3}>
                <SiVirustotal style={{ fontSize: "25px", color: "white" }} />
              </div>

              <div className={dash.bottom}>
                <h2>600k</h2>
                <p>Total Appointments</p>
              </div>
            </div>

            <div className={dash.right}>
              <div className={dash.number}>
                <p>+15%</p>
              </div>

              <PiChartLineUpThin style={{ fontSize: "3rem", color: "green" }} />
            </div>
          </div>

          <div className={dash.card}>
            <div className={dash.left}>
              <div className={dash.cardIcon4}>
                <SiVirustotal style={{ fontSize: "25px", color: "white" }} />
              </div>

              <div className={dash.bottom}>
                <h2>800k</h2>
                <p>Total Hospitals</p>
              </div>
            </div>

            <div className={dash.right}>
              <div className={dash.number3}>
                <p>+25%</p>
              </div>

              <PiChartLineUpThin
                style={{ fontSize: "3rem", color: "orange" }}
              />
            </div>
          </div>
        </section>

        <section className={dash.section2}>
          <PatientsChart />
          {/* <DepartmentChart /> */}
          <DepartmentsChart />
        </section>

        <section className={dash.section3}>
          <div className={dash.topHospitals}>
            <h2 className={dash.hospitalHeader}>Top Hospitals</h2>
            <Link to="/app/hospital" className={dash.topContainer}>
              <p className={dash.sN}>#1</p>
              <span className={dash.hospitalWrapper}>
                <img src={hosp} alt="" className={dash.hospital} />
                <p>Lagos University Teaching Hospital (LUTH)</p>
              </span>
            </Link>

            <Link to="/app/hospital" className={dash.topContainer}>
              <p className={dash.sN}>#2</p>
              <span className={dash.hospitalWrapper}>
                <img src={hosp} alt="" className={dash.hospital} />
                <p>National Hospital Abuja</p>
              </span>
            </Link>

            <Link to="/app/hospital" className={dash.topContainer}>
              <p className={dash.sN}>#3</p>
              <span className={dash.hospitalWrapper}>
                <img src={hosp} alt="" className={dash.hospital} />
                <p>Ahmadu Bello University Teaching Hospital (ABUTH)</p>
              </span>
            </Link>

            <Link to="/app/hospital" className={dash.topContainer}>
              <p className={dash.sN}>#4</p>
              <span className={dash.hospitalWrapper}>
                <img src={hosp} alt="" className={dash.hospital} />
                <p>
                  Obafemi Awolowo University Teaching Hospitals Complex (OAUTHC)
                </p>
              </span>
            </Link>

            <Link to="/app/hospital" className={dash.topContainer}>
              <p className={dash.sN}>#5</p>
              <span className={dash.hospitalWrapper}>
                <img src={hosp} alt="" className={dash.hospital} />
                <p>Nnamdi Azikiwe University Teaching Hospital (NAUTH)</p>
              </span>
            </Link>

            <Link to="/app/hospital" className={dash.topContainer}>
              <p className={dash.sN}>#6</p>
              <span className={dash.hospitalWrapper}>
                <img src={hosp} alt="" className={dash.hospital} />
                <p>University of Benin Teaching Hospital (UBTH)</p>
              </span>
            </Link>

            <Link to="/app/hospital" className={dash.topContainer}>
              <p className={dash.sN}>#7</p>
              <span className={dash.hospitalWrapper}>
                <img src={hosp} alt="" className={dash.hospital} />
                <p>Reddington Hospital (Lagos)</p>
              </span>
            </Link>
          </div>

          <div className={dash.AvailabilityContainer}>
            <div className={dash.AvailabilityTable}>
              <h2>Doctors Availability</h2>
              <div className={dash.AvailabilityOptions}>
                <div className={dash.options}>
                  <div className={dash.green}></div>
                  <p>Available</p>
                </div>

                <div className={dash.options}>
                  <div className={dash.orange}></div>
                  <p>On Call</p>
                </div>

                <div className={dash.options}>
                  <div className={dash.purple}></div>
                  <p>In Surgery</p>
                </div>

                <div className={dash.options}>
                  <div className={dash.yellow}></div>
                  <p>Out of Office</p>
                </div>

                <div className={dash.options}>
                  <div className={dash.grey}></div>
                  <p>Unavailabe</p>
                </div>
              </div>
            </div>

            <div className={dash.tableWrapper}>
              <table className={dash.table}>
                <thead>
                  <tr>
                    <th className={dash.tableHead}>Doctor</th>
                    <th className={dash.tableHead}>Specialty</th>
                    <th className={dash.tableHead}>Hospital</th>
                    <th className={dash.tableHead}>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={dash.rows}>
                    <td className={dash.tableData}>
                      <div className={dash.statusGreen}>
                        <img src={doctor1} alt="Doctor 1" />
                      </div>
                      Dr. Mannie Ogaga
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Cardiology
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Lagos University Teaching Hospital (LUTH)
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Lagos, Lagos State
                    </td>
                  </tr>

                  <tr className={dash.rows}>
                    <td className={dash.tableData}>
                      <div className={dash.statusGrey}>
                        <img src={doctor2} alt="Doctor 1" />
                      </div>
                      Dr. Amina Ahmed
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Pediatrics
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      University of Benin Teaching Hospital
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Benin, Edo State
                    </td>
                  </tr>

                  <tr className={dash.rows}>
                    <td className={dash.tableData}>
                      <div className={dash.statusGrey}>
                        <img src={doctor2} alt="Doctor 1" />
                      </div>
                      Dr. Chessa John
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Oncology
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Obafemi Awolowo Teaching Hospitals Complex
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Ile-Ife, Osun State
                    </td>
                  </tr>

                  <tr className={dash.rows}>
                    <td className={dash.tableData}>
                      <div className={dash.statusOrange}>
                        <img src={doctor2} alt="Doctor 1" />
                      </div>
                      Dr. Abiola Onasanya
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Pediatrics
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Federal Medical Centre (FMC)
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Owerri, Imo State
                    </td>
                  </tr>

                  <tr className={dash.rows}>
                    <td className={dash.tableData}>
                      <div className={dash.statusYellow}>
                        <img src={doctor2} alt="Doctor 1" />
                      </div>
                      Dr. Osas Aigbe
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Dermatology
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      University of Nigeria Teaching Hospital (UNTH)
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Enugu, Enugu State
                    </td>
                  </tr>

                  <tr className={dash.rows}>
                    <td className={dash.tableData}>
                      <div className={dash.statusPurple}>
                        <img src={doctor2} alt="Doctor 1" />
                      </div>
                      Dr. Sheila James
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Gynecology/Obstetrics
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Ahmadu Bello University Teaching Hospital
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Zaria, Kaduna State
                    </td>
                  </tr>

                  <tr className={dash.rows}>
                    <td className={dash.tableData}>
                      <div className={dash.statusGreen}>
                        <img src={doctor2} alt="Doctor 1" />
                      </div>
                      Dr. Abubakar Ismail
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Gastroenterology
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Reddington Hospital (Lagos)
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Lagos State
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </PrivateLayout>
  );
};

export default Dashboard;
