import React, { useState } from "react";
import PrivateLayout from "../../layout/PrivateLayout";
import hos from "./styles.module.css";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import hospitals from "../../interface/mock";
import { HospitalType } from "../../interface";

const Hospital: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const hospitalsPerPage: number = 7;

  // Filter hospitals based on search and location
  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesName = hospital.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = location
      ? hospital.address.toLowerCase().includes(location.toLowerCase())
      : true;
    return matchesName && matchesLocation;
  });

  // Logic for displaying hospitals
  const indexOfLastHospital: number = currentPage * hospitalsPerPage;
  const indexOfFirstHospital: number = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals: HospitalType[] = filteredHospitals.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  // Logic for pagination
  const pageNumbers: number[] = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredHospitals.length / hospitalsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  // Pagination handler
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <PrivateLayout
      pageTitle="Hospitals"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <main>
        <div className={hos.HospitalsWrapper}>
          <div className={hos.searchFilterWrapper}>
            <input
              type="text"
              placeholder="Search by hospital name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={hos.searchInput}
            />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={hos.locationSelect}
            >
              <option value="">All Locations</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Oyo">Oyo</option>
              <option value="Kaduna">Kaaduna</option>
              <option value="Osun">Osun</option>
              <option value="Enugu">Enugu</option>
              <option value="Anambra">Anambra</option>
              <option value="Ogun">Ogun</option>
              <option value="Edo">Edo</option>
              <option value="Delta">Delta</option>
              <option value="Gombe">Gombe</option>
              <option value="Kwara">Kwara</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Lagos">Lagos</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Ondo">Ondo</option>
              <option value="Rivers">Rivers</option>
              <option value="Abia">Abia</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Benue">Benue</option>
              <option value="Plateau">Plateau</option>
              <option value="Imo">Imo</option>
              <option value="Nger">Nger</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Katsina">Katsina</option>
              <option value="Kogi">Kogi</option>
              <option value="Borno">Borno</option>
              <option value="Zamfara">Zamfara</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Yobe">Yobe</option>
              <option value="Taraba">Taraba</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Cross River">Cross River</option>
            </select>
          </div>

          <div className={hos.cardContainer}>
            {currentHospitals.map((hospital, index) => (
              <div key={index} className={hos.card}>
                <h3 className={hos.cardTitle}>{hospital.name}</h3>
                <div className={hos.cardContent}>
                  <p>
                    <FaMapMarkerAlt /> {hospital.address}
                  </p>
                  <p>
                    <FaPhone /> {hospital.phone || "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={hos.pagination}>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={hos.pageLink}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default Hospital;
