import { Link } from 'react-router-dom';
import './List.scss';
import { FaUsers, FaUserTie,  } from 'react-icons/fa';

const DepList = ({ departments }) => {

    

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 main-title">Bo'limlar</h1>
      <div className="row">
        {departments?.map((department) => (
          <div key={department.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 department-card">
              <div className="card-body">
                <h5 className="card-title">{department.name}</h5>
                <div className="director-info">
                  <FaUserTie className="icon" />
                  <span>{department.director.fio}</span>
                </div>
                <div className="employee-count">
                  <FaUsers className="icon" />
                  <span>{department.count_of_employees} ta xodim</span>
                </div>
               
                <Link to={`/departments/${department?.id}`}> <button 
                  className="btn btn-primary mt-3" 
                  data-bs-toggle="modal" 
                  data-bs-target={`#departmentModal${department.id}`}
                >
                 Batafsil
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DepList;

